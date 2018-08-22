import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserService} from '../../../../services/user.service';

@Component({
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {

  constructor(private userService: UserService) {}
}
