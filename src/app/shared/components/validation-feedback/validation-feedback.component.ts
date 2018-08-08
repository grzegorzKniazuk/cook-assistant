import {Component, Input, OnInit, Optional, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-validation-feedback',
  templateUrl: './validation-feedback.component.html',
  styleUrls: ['./validation-feedback.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ValidationFeedbackComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public controlName: string;
  @Input() public groupName?: FormGroup;

  constructor(@Optional() private formGroup: FormGroupDirective) {}

  public ngOnInit(): void {
    if (!this.control && this.controlName && this.formGroup) {
      this.control = <FormControl>this.formGroup.form.get(this.controlName);
    } else {
      throw new Error('Validation Feedback must have [control] or [controlName] input');
    }
  }
}
