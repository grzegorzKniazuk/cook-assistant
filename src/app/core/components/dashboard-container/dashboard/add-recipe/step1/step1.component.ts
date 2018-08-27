import { Component } from '@angular/core';
import { RecipeFormService } from '../../../../../services/recipe-form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {

  constructor(public recipeFormService: RecipeFormService) {}

}
