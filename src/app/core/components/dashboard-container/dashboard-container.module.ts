import { NgModule } from '@angular/core';
import { DashboardContainerComponent } from './dashboard-container.component';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardContainerRouteModule } from './dashboard-container-route.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardContainerRouteModule,
    DashboardModule,
  ],
  declarations: [
    DashboardContainerComponent,
  ],
})
export class DashboardContainerModule { }
