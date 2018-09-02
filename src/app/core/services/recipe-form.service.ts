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
      c0: [{ value: false, disabled: false }],
      c1: [{ value: false, disabled: false }],
      c2: [{ value: false, disabled: false }],
      c3: [{ value: false, disabled: false }],
      c4: [{ value: false, disabled: false }],
      c5: [{ value: false, disabled: false }],
      c6: [{ value: false, disabled: false }],
      c7: [{ value: false, disabled: false }],
      c8: [{ value: false, disabled: false }],
      c9: [{ value: false, disabled: false }],
      c10: [{ value: false, disabled: false }],
      c11: [{ value: false, disabled: false }],
      c12: [{ value: false, disabled: false }],
      c13: [{ value: false, disabled: false }],
      c14: [{ value: false, disabled: false }],
      c15: [{ value: false, disabled: false }],
      c16: [{ value: false, disabled: false }],
      c17: [{ value: false, disabled: false }],
    });
  }
}
