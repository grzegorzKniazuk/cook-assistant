import { Injectable } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {

  public addRecipeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  public addRecipeFormInit(): void {
    this.addRecipeForm = this.formBuilder.group({
      title: ['', [ Validators.required ]],
      categories: this.formBuilder.array([

      ]),
      ingredients: this.formBuilder.array([]),
      description: ['', [Validators.required]],
    });
  }
}
