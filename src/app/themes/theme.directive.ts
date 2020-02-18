import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Theme } from './symbols';
import { ThemeService } from './theme.service';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(
    private elemref: ElementRef,
    private themes: ThemeService) { }

  ngOnInit() {
    const active = this.themes.getActiveTheme();
    if (active) {
      this.updateTheme(active);
    }

    this.themes.themeChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme: Theme) => this.updateTheme(theme));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateTheme(theme: Theme) {
    // project properties onto the element
    for (const key in theme.properties) {
      if (key) {
        this.elemref.nativeElement.style.setProperty(key, theme.properties[key]);
      }
    }
    // remove old theme
    for (const name of this.themes.theme) {
      if (name) {
        this.elemref.nativeElement.classList.remove(`${name}-theme`);
      }
    }
    // alias element with theme name
    this.elemref.nativeElement.classList.add(`${theme.name}-theme`);
  }
}
