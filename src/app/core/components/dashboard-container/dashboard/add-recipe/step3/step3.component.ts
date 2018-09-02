import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { RecipeFormService } from '../../../../../services/recipe-form.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step3Component implements OnInit {

  public readonly categories = [
    { id : 'c0', description: 'Przekąski i przystawki' },
    { id : 'c1', description: 'Dania główne' },
    { id : 'c2', description: 'Desery' },
    { id : 'c3', description: 'Zupy' },
    { id : 'c4', description: 'Ryby i owoce morza' },
    { id : 'c5', description: 'Ciasta i ciasteczka' },
    { id : 'c6', description: 'Zapiekanki' },
    { id : 'c7', description: 'Potrawy z warzyw' },
    { id : 'c8', description: 'Drób' },
    { id : 'c9', description: 'Dziczyzna' },
    { id : 'c10', description: 'Grill i barbeque' },
    { id : 'c11', description: 'Naleśniki, placki i omlety' },
    { id : 'c12', description: 'Napoje i drinki' },
    { id : 'c13', description: 'Sosy i dipy' },
    { id : 'c14', description: 'Mączne i zbożowe' },
    { id : 'c15', description: 'Sałatki' },
  ];

  constructor(public recipeFormService: RecipeFormService) { }

  ngOnInit(): void {
    this.recipeFormService.addRecipeForm.valueChanges.subscribe(value => {
      console.log(value);
      console.log(this.recipeFormService.addRecipeForm);
    });
  }
}
