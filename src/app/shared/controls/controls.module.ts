import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'app/shared/controls/input/input.module';
import { FormFieldModule } from 'app/shared/controls/form-field/form-field.module';
import { PasswordModule } from 'app/shared/controls/password/password.module';
import { SelectModule } from 'app/shared/controls/select/select.module';
import { CheckboxModule } from 'app/shared/controls/checkbox/checkbox.module';
import { RadioModule } from 'app/shared/controls/radio/radio.module';
import { DateModule } from 'app/shared/controls/date/date.module';
import { DateRangeModule } from 'app/shared/controls/date-range/date-range.module';
import { AutocompleteModule } from 'app/shared/controls/autocomplete/autocomplete.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxModule,
    RadioModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxModule,
    RadioModule,
    DateModule,
    DateRangeModule,
    AutocompleteModule,
  ],
})
export class ControlsModule {}
