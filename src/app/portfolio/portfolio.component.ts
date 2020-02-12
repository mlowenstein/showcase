import {
  Component,
  OnInit,
} from '@angular/core';

import {
  PortfolioService,
} from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
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
}
