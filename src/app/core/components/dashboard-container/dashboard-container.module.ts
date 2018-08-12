import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContainerRouteModule} from './dashboard-container-route.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardContainerRouteModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardContainerComponent,
  ],
})
export class DashboardContainerModule { }
