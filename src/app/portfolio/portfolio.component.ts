import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  PortfolioService,
} from './portfolio.service';
import {
  SidebarComponent,
} from './sidebar';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('sidebar', {static: true}) sidebar: SidebarComponent;
  loading = true;

  constructor(private service: PortfolioService) { }

  ngOnInit() {
    this.preload();
  }

  preload() {
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }

  onToggling(toggle: boolean) {
    if (this.sidebar.sidenav.opened) {
      this.sidebar.sidenav.close();
    } else {
      this.sidebar.sidenav.open();
    }
  }
}
