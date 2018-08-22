import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthActivateGuard } from '../../guards/auth-activate.guard';
import { RecipesListComponent } from './dashboard/recipes-list/recipes-list.component';
import {AddRecipeComponent} from './dashboard/add-recipe/add-recipe.component';
import {MyProfileComponent} from './dashboard/my-profile/my-profile.component';

// TODO nie dziala tutaj route do przepisow
const DASHBOARD_CONTAINER_ROUTES: Routes = [
  { path: '', component: DashboardContainerComponent, canActivate: [ AuthActivateGuard ], children: [
      { path: '', component: DashboardComponent, canActivate: [ AuthActivateGuard ], children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: RecipesListComponent, canActivate: [ AuthActivateGuard ] },
          { path: 'add', component: AddRecipeComponent, canActivate: [ AuthActivateGuard ] },
          { path: 'profile', component: MyProfileComponent, canActivate: [ AuthActivateGuard ] },
        ],
      },
    ],
  },
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
