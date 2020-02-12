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
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

import {
  AppComponent,
} from './app.component';
import {
  AppRoutingModule,
} from './app-routing.module';
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
  NgHttpLoaderModule,
} from 'ng-http-loader';
import {
  NgModule,
} from '@angular/core';
import {
  OAuthModule,
} from 'angular-oauth2-oidc';
import {
  adapterFactory,
} from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PortfolioModule,
  // }
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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    NgHttpLoaderModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OAuthModule.forRoot(),
  ],
  providers: [
    AppComponent,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestInterceptor,
    //   multi: true
    // },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
