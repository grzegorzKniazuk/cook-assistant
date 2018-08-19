import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookRecipeTableComponent } from './cook-recipe-table/cook-recipe-table.component';
import { DashboardComponent } from './dashboard.component';
import { AuthActivateGuard } from '../../../guards/auth-activate.guard';

const DASHBOARD_ROUTES: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ AuthActivateGuard ], children: [
      { path: '',  canActivate: [ AuthActivateGuard ], component: CookRecipeTableComponent }
    ] },
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
