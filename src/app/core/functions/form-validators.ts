import { AbstractControl, ValidationErrors } from '@angular/forms';

export const comparePasswords = (
  control: AbstractControl
): ValidationErrors | null => {
  const newPassword = control.get('newPassword');
  const repeatNewPassword = control.get('repeatPassword');

  return newPassword &&
    repeatNewPassword &&
    newPassword.value !== repeatNewPassword.value
    ? { notMatch: true }
    : null;
};
