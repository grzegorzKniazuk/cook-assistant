import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    NavigationComponent,
    RecipesListComponent,
    AddRecipeComponent,
    MyProfileComponent,
  ],
})
export class DashboardModule { }
