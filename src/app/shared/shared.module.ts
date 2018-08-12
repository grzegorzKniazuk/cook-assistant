import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFeedbackComponent } from './components/validation-feedback/validation-feedback.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
  ],
  entryComponents: [
    AlertComponent,
  ],
  exports: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
  ]
})
export class SharedModule { }
