import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '@core/services/account.service';

@Component({
  selector: 'sign-in-page',
  template: `
    <div class="sign-in-page">
      <div class="sign-in-page__wrapper">
        <div class="sign-in-page__sign-in-section">
          <div class="sign-in-page__sign-in-section-wrapper">
            <h1 class="text-center">Sign in to your account</h1>

            <form [formGroup]="signInFormGroup" (ngSubmit)="submit()">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  formControlName="email"
                  required
                />

                <validator
                  [isTouched]="signInFormGroup.get('email')?.touched"
                  [controlErrors]="signInFormGroup.get('email')?.errors"
                ></validator>
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  formControlName="password"
                  required
                />

                <validator
                  [isTouched]="signInFormGroup.get('password')?.touched"
                  [controlErrors]="signInFormGroup.get('password')?.errors"
                ></validator>
              </div>

              <button
                type="submit"
                [disabled]="signInFormGroup.invalid"
                class="btn btn-secondary w-100"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['sign-in.component.scss'],
})
export class SignInComponent {
  public signInFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {
    this.signInFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public submit(): void {
    if (this.signInFormGroup.invalid) {
      return;
    }

    this.accountService
      .signIn(
        this.signInFormGroup.get('email')?.value,
        this.signInFormGroup.get('password')?.value
      )
      .subscribe(() => this.redirectToMainPage());
  }

  private redirectToMainPage(): void {
    this.router.navigate(['/']);
  }
}
