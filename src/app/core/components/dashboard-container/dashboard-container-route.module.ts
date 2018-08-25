import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthActivateGuard } from '../../guards/auth-activate.guard';
import { RecipesListComponent } from './dashboard/recipes-list/recipes-list.component';
import { AddRecipeComponent } from './dashboard/add-recipe/add-recipe.component';
import { MyProfileComponent } from './dashboard/my-profile/my-profile.component';
import { Step1Component } from './dashboard/add-recipe/step1/step1.component';
import { Step2Component } from './dashboard/add-recipe/step2/step2.component';
import { Step3Component } from './dashboard/add-recipe/step3/step3.component';
import { Step4Component } from './dashboard/add-recipe/step4/step4.component';
import { Step5Component } from './dashboard/add-recipe/step5/step5.component';

const DASHBOARD_CONTAINER_ROUTES: Routes = [
  { path: '', component: DashboardContainerComponent, canActivate: [ AuthActivateGuard ], children: [
      { path: '', component: DashboardComponent, canActivate: [ AuthActivateGuard ], children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: RecipesListComponent, canActivate: [ AuthActivateGuard ] },
          { path: 'add', component: AddRecipeComponent, canActivate: [ AuthActivateGuard ], children: [
              {path: '', redirectTo: 'step-1' },
              {path: 'step-1', component: Step1Component, canActivate: [ AuthActivateGuard ] },
              {path: 'step-2', component: Step2Component, canActivate: [ AuthActivateGuard ] },
              {path: 'step-3', component: Step3Component, canActivate: [ AuthActivateGuard ] },
              {path: 'step-4', component: Step4Component, canActivate: [ AuthActivateGuard ] },
              {path: 'step-5', component: Step5Component, canActivate: [ AuthActivateGuard ] },
            ]
          },
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
