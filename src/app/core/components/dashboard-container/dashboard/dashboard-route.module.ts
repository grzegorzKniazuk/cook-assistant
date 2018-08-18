import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CookRecipeTableComponent} from './cook-recipe-table/cook-recipe-table.component';

const DASHBOARD_ROUTES: Routes = [
  { path: '', component: CookRecipeTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRouteModule { }
