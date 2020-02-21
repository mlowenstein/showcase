import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  DomSanitizer,
} from '@angular/platform-browser';
import {
  ICONLINKS,
} from '../../data/constant';
import {
  IconLink,
} from '../../data/interface';
import {
  MatIconRegistry,
} from '@angular/material/icon';
import {
  MatSidenav,
} from '@angular/material/sidenav';
import {
  getSorted,
} from '../../data/operation';

const logos = '../../../assets/icons/svg/';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  navLinks: IconLink[] = [];

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
    ICONLINKS.forEach((iconlink: IconLink) => {
      const pathtoicon = logos + iconlink.path;
      this.registry.addSvgIcon(
        iconlink.name, this.sanitizer
        .bypassSecurityTrustResourceUrl(pathtoicon)
      );
      if (iconlink.type === 'navigation') this.navLinks.push(iconlink);
    });
  }

  ngOnInit() {
    this.sidenav.opened = true;
    this.navLinks.sort(getSorted('order'));
  }

  toggle() {
    this.sidenav.toggle();
  }
}
