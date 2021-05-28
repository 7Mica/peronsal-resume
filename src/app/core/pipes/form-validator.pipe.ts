import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formValidator',
})
export class FormValidtor implements PipeTransform {
  transform(value: ValidationErrors | null | undefined, ...args: any[]) {
    if (!args[0]) {
      return;
    } else {
      for (const i in value) {
        if (value.hasOwnProperty(i)) {
          switch (i) {
            case 'required':
              return 'This field is required';
            case 'email':
              return 'Email format is not correct';
            case 'min':
              return `Min number is ${value.min.min}`;
            case 'max':
              return `Max number is ${value.max.max}`;
            case 'minlength':
              return `Min length is ${value.minlength.requiredLength}`;
            case 'maxlength':
              return `Max length is ${value.maxlength.requiredLength}`;
            case 'notMatch':
              return 'Passwords don\'t match';
            default:
              return;
          }
        }
      }
    }
  }
}

@NgModule({
  declarations: [FormValidtor],
  exports: [FormValidtor],
})
export class FormValidatorModule {}
