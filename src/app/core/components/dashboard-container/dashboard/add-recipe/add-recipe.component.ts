import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRecipeComponent {}
