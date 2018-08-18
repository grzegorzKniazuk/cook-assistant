import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardContainerRouteModule } from './dashboard-container-route.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardModule,
    DashboardContainerRouteModule,
    RouterModule,
  ],
  declarations: [
    DashboardContainerComponent,
  ],
})
export class DashboardContainerModule { }
