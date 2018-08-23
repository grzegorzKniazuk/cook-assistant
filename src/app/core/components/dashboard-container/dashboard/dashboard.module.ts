import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { Step1Component } from './add-recipe/step1/step1.component';
import { Step2Component } from './add-recipe/step2/step2.component';
import { Step3Component } from './add-recipe/step3/step3.component';
import { Step4Component } from './add-recipe/step4/step4.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Step5Component } from './add-recipe/step5/step5.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    NavigationComponent,
    RecipesListComponent,
    AddRecipeComponent,
    MyProfileComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
  ],
})
export class DashboardModule { }
