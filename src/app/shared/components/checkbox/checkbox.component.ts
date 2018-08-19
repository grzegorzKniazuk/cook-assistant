import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxComponent),
  multi: true,
};

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [CHECKBOX_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CheckboxComponent implements ControlValueAccessor {

  public _onChange: (_: any) => {};
  public _onTouched: () => {};
  @ViewChild('checkbox') private checkboxElement: ElementRef;

  constructor(private _renderer: Renderer2) {}

  writeValue(value: boolean): void {
    this._renderer.setProperty(this.checkboxElement.nativeElement, 'checked', value);
  }

  public registerOnChange(fn: (_: any) => {}): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.checkboxElement.nativeElement, 'disabled', isDisabled);
  }
}
