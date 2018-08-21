import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthActivateGuard } from '../../guards/auth-activate.guard';
import { RecipesListComponent } from './dashboard/recipes-list/recipes-list.component';

// TODO nie dziala tutaj route do przepisow
const DASHBOARD_CONTAINER_ROUTES: Routes = [
  { path: '',
    component: DashboardContainerComponent,
    canActivate: [ AuthActivateGuard ],
    children: [
      { path: '',
        component: DashboardComponent,
        canActivate: [ AuthActivateGuard ],
      },
      { path: '',
        component: RecipesListComponent,
        canActivate: [ AuthActivateGuard ],
        outlet: 'dashboard-outlet',
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_CONTAINER_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class DashboardContainerRouteModule { }
