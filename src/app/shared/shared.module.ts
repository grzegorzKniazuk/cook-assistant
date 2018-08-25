import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFeedbackComponent } from './components/validation-feedback/validation-feedback.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AlertComponent } from './components/alert/alert.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { IconsModule } from './icons.module';
import { LogoHeaderComponent } from './components/logo-header/logo-header.component';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
  ],
  declarations: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
    DropdownComponent,
    LogoHeaderComponent,
    FileUploadComponent,
    ProgressBarComponent,
  ],
  entryComponents: [
    AlertComponent,
  ],
  exports: [
    ValidationFeedbackComponent,
    CheckboxComponent,
    AlertComponent,
    DropdownComponent,
    LogoHeaderComponent,
    IconsModule,
    CommonModule,
    FileUploadComponent,
    ProgressBarComponent,
  ]
})
export class SharedModule { }
