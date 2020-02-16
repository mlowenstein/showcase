import 'hammerjs';

import {
  CalendarModule,
  DateAdapter,
} from 'angular-calendar';
import {
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';
import {
  ThemeModule,
  darkTheme,
  defaultTheme,
} from './themes';

import {
  AppComponent,
} from './app.component';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  BrowserModule,
} from '@angular/platform-browser';
import {
  FlexLayoutModule,
} from '@angular/flex-layout';
import {
  HttpClientModule,
} from '@angular/common/http';
import {
  NgHttpLoaderModule,
} from 'ng-http-loader';
import {
  NgModule,
} from '@angular/core';
import {
  OAuthModule,
} from 'angular-oauth2-oidc';
import {
  PortfolioComponent,
} from './portfolio/portfolio.component';
import {
  PortfolioModule,
} from './portfolio/portfolio.module';
import {
  adapterFactory,
} from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, config),
    PortfolioModule,
    HttpClientModule,
    FlexLayoutModule,
    NgHttpLoaderModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OAuthModule.forRoot(),
    ThemeModule.forRoot({
      themes: [defaultTheme, darkTheme],
      active: 'default'
    }),
  ],
  providers: [
    AppComponent,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
