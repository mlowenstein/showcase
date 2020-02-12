import {
  AboutComponent,
} from './about';
import {
  CommonModule,
} from '@angular/common';
import {
  ContactComponent,
} from './contact';
import {
  ExperienceComponent,
} from './experience';
import {
  FooterComponent,
} from './footer';
import {
  FormsModule,
} from '@angular/forms';
import {
  HeaderComponent,
} from './header';
import {
  LoginComponent,
} from './login';
import {
  MaterialModule,
} from '../material.module';
import {
  NgModule,
} from '@angular/core';
import {
  PortfolioComponent,
} from './portfolio.component';
import {
  PortfolioService,
} from './portfolio.service';
import {
  ProjectsComponent,
} from './projects';
import {
  ReferencesComponent,
} from './references';
import {
  SkillsComponent,
} from './skills';
import {
  WelcomeComponent,
} from './welcome';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    ReferencesComponent,
    SkillsComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProjectsComponent,
    ReferencesComponent,
    SkillsComponent,
    WelcomeComponent,
  ],
  providers: [
    PortfolioService,
  ]
})
export class PortfolioModule { }
