import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRoute } from './dashboard.route';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    dashboardRoute,
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
