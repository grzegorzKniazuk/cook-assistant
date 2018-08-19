import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFeedbackComponent } from './components/validation-feedback/validation-feedback.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AlertComponent } from './components/alert/alert.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { IconsModule } from './icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
  ],
  declarations: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
    DropdownComponent,
  ],
  entryComponents: [
    AlertComponent,
  ],
  exports: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
    DropdownComponent,
    IconsModule,
  ]
})
export class SharedModule { }
