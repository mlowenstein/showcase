import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  GITHUB,
  GMAIL,
  ICONLINKS,
  LINKEDIN,
} from '../../data/constant';

import {
  DomSanitizer,
} from '@angular/platform-browser';
import {
  IconLink,
} from '../../data/interface';
import {
  MatIconRegistry,
} from '@angular/material/icon';

const logos = '../../../assets/icons/svg/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggling = new EventEmitter<boolean>();
  accountLinks: IconLink[] = [];

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
      ICONLINKS.forEach((iconlink: IconLink) => {
        const pathtoicon = logos + iconlink.path;
        this.registry.addSvgIcon(
          iconlink.name, this.sanitizer
          .bypassSecurityTrustResourceUrl(pathtoicon)
        );
        if (iconlink.type === 'account') this.accountLinks.push(iconlink);
    });
  }

  toGithub(item: IconLink): boolean {
    return (item.display === GITHUB);
  }

  toGMail(item: IconLink): boolean {
    return (item.display === GMAIL);
  }

  toLinkedIn(item: IconLink): boolean {
    return (item.display === LINKEDIN);
  }

  toggleSidebar() {
    this.toggling.emit(true);
  }
}
