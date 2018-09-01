import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RecipeFormService} from '../../../../../services/recipe-form.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step1Component {

  constructor(public recipeFormService: RecipeFormService) {}

}
