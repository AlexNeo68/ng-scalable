import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'app/shared/controls/input/input.module';
import { FormFieldModule } from 'app/shared/controls/form-field/form-field.module';
import { PasswordModule } from 'app/shared/controls/password/password.module';
import { SelectModule } from 'app/shared/controls/select/select.module';
import { CheckboxModule } from 'app/shared/controls/checkbox/checkbox.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxModule,
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    CheckboxModule,
  ],
})
export class ControlsModule {}
