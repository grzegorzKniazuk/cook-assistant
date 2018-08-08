import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { LoginModule } from './components/login/login.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Error404Component } from './components/error404/error404.component';
import { coreRoute } from './core-route';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent} from './components/register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    LoginModule,
    coreRoute,
  ],
  declarations: [
    ShowcaseComponent,
    HomepageComponent,
    Error404Component,
    DashboardComponent,
    RegisterComponent,
  ],
})
export class CoreModule { }
