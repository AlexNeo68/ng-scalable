import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input('placeholder') placeholderProps: string;
  @Output() changed = new EventEmitter<string>();

  value: string;
  isDisabled: boolean;

  private propogateChange: any = () => {};
  private propogateTouched: any = () => {};

  writeValue(value: string): void {
    console.log(value);
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propogateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propogateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onKeyup(event: KeyboardEvent): void {
    this.value = (event.target as HTMLInputElement).value;
    this.propogateChange(this.value);
    this.changed.emit(this.value);
  }
  onBlur(): void {
    this.propogateTouched();
  }
}
