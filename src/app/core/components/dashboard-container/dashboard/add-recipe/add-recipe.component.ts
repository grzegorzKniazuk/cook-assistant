import { Component, OnInit } from '@angular/core';
import { RecipeFormService } from '../../../../services/recipe-form.service';

@Component({
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {

  public readonly stepsDescription: string[] = [ 'Wprowadź tytuł', 'Dodaj zdjęcie', 'Przypisz kategorie', 'Dodaj składniki', 'Dodaj opis' ];

  constructor(public recipeFormService: RecipeFormService) {}

  public ngOnInit(): void {
    this.recipeFormService.addRecipeFormInit();
    this.recipeFormService.addRecipeForm.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.recipeFormService.addRecipeForm);
    });

  }
}
