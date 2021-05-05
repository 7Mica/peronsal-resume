import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormValidatorModule } from '@core/pipes/form-validator.pipe';
import { ValidatorComponent } from './validator.component';

@NgModule({
  declarations: [ValidatorComponent],
  imports: [FormValidatorModule, CommonModule],
  exports: [ValidatorComponent],
})
export class ValidatorModule {}
