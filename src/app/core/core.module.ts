import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { LoginModule } from './components/login/login.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Error404Component } from './components/error404/error404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CoreRouteModule } from './core-route.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    CoreRouteModule,
    LoginModule,
    RouterModule,
  ],
  declarations: [
    ShowcaseComponent,
    HomepageComponent,
    Error404Component,
  ],
})
export class CoreModule { }
