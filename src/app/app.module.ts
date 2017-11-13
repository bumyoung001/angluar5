import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ApiGatewayService } from './shared/api-gateway.service';
import { AuthenticationService } from './login/authentication.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { UserService } from './home/user.service';
import { routing } from './app.routing';

import { HttpInterceptorService } from './shared/http-interceptor.service';

import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    ApiGatewayService,
    AuthenticationService,
    AuthGuardService,
    UserService,
    [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
