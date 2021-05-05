import { trigger } from '@angular/animations';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { fadeInOutTransition } from '@core/animations/common-animations';

@Component({
  selector: 'validator',
  template: `
    <span
      @appearValidator
      class="form-validator"
      *ngIf="isTouchedIn && controlErrorsIn"
    >
      {{ controlErrorsIn | formValidator: isTouchedIn }}
    </span>
  `,
  styleUrls: ['validator.component.scss'],
  animations: [trigger('appearValidator', fadeInOutTransition)],
})
export class ValidatorComponent implements OnChanges {
  @Input()
  controlErrors: ValidationErrors | null | undefined = null;

  @Input()
  isTouched: boolean | undefined = false;

  public controlErrorsIn: ValidationErrors | null | undefined = null;
  public isTouchedIn = false;

  ngOnChanges({ controlErrors, isTouched }: SimpleChanges): void {
    if (controlErrors) {
      this.controlErrorsIn = controlErrors.currentValue;
    }

    if (isTouched) {
      this.isTouchedIn = isTouched.currentValue;
    }
  }
}
