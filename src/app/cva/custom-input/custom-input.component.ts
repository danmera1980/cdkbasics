import { Target } from '@angular/compiler';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  disabled!: boolean;

  constructor() { }
  writeValue(value: string): void {
    this.value = value ? value: '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    console.log(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setValue(event: Event){
    let val = (event.target as HTMLInputElement).value;
    this.onChange(val)
  }

}
