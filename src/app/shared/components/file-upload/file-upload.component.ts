import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const FILE_UPLOAD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FileUploadComponent),
  multi: true,
};

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [ FILE_UPLOAD_VALUE_ACCESSOR ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent implements ControlValueAccessor {

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState(isDisabled: boolean): void {

  }

  writeValue(obj: any): void {

  }

  constructor() { }

}
