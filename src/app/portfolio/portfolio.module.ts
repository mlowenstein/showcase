import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NotificationComponent,
  NotificationService,
} from './notification';

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
  FlexLayoutModule,
} from '@angular/flex-layout';
import {
  FooterComponent,
} from './footer';
import {
  HeaderComponent,
} from './header';
import {
  HttpClientModule,
} from '@angular/common/http';
import {
  LoaderComponent,
} from './loader';
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
  SidebarComponent,
} from './sidebar';
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
    LoaderComponent,
    NotificationComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferencesComponent,
    SidebarComponent,
    SkillsComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    NotificationComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferencesComponent,
    SidebarComponent,
    SkillsComponent,
    WelcomeComponent,
  ],
  entryComponents: [
    LoaderComponent,
    NotificationComponent,
  ],
  providers: [
    NotificationService,
    PortfolioService,
  ]
})
export class PortfolioModule { }
