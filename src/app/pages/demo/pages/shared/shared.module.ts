import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from 'app/shared';
import { ControlsModule } from 'app/shared/controls';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorsModule } from 'app/shared/indicators/indicators.module';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    IndicatorsModule,
  ],
})
export class SharedModule {}
