import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecipeFormService } from '../../../../../services/recipe-form.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step3Component {

  constructor(public recipeFormService: RecipeFormService) { }
}
