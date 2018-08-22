import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { CoreRouteModule } from './core-route.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    BrowserModule,
    CoreRouteModule,
  ],
  declarations: [
    ShowcaseComponent,
    HomepageComponent,
  ],
})
export class CoreModule { }
