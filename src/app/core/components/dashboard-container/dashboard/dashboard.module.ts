import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { CookRecipeTableComponent } from './cook-recipe-table/cook-recipe-table.component';
import { DashboardRouteModule } from './dashboard-route.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouteModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    NavigationComponent,
    CookRecipeTableComponent,
  ],
})
export class DashboardModule { }
