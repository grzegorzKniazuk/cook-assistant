import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RecipeFormService {

  public addRecipeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  public addRecipeFormInit(): void {
    this.addRecipeForm = this.formBuilder.group({
      title: ['', [ Validators.required ]],
    });
  }
}
