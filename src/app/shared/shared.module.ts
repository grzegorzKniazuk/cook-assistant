import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFeedbackComponent } from './components/validation-feedback/validation-feedback.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidationFeedbackComponent,
    CheckboxComponent,
  ],
  exports: [
    ValidationFeedbackComponent,
    CheckboxComponent,
  ]
})
export class SharedModule { }
