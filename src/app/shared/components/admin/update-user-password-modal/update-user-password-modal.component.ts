import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GraphQLClients } from '@core/enums/graphql-clients.enum';
import { comparePasswords } from '@core/functions/form-validators';
import { UPDATE_PASSWORD } from '@core/graphql/queries/account.queries';
import { IUpdateUserPassword } from '@core/interfaces/update-user-password.interface';
import { Apollo, ApolloBase } from 'apollo-angular';

@Component({
  selector: 'update-user-password',
  template: `
    <div class="update-user-password-modal">
      <div class="modal-header-actions">
        <button
          class="btn btn-icon"
          type="button"
          (click)="matDialogRef.close()"
          tabindex="-1"
        >
          &times;
        </button>
      </div>
      <div class="update-user-password-modal__wrapper">
        <form
          [formGroup]="updatePasswordForm"
          (ngSubmit)="submitUpdatePasswordForm()"
        >
          <div class="form-group">
            <label for="old-password">Old password</label>
            <input
              focus
              type="password"
              class="form-control"
              id="old-password"
              formControlName="oldPassword"
            />

            <validator
              [isTouched]="updatePasswordForm.get('oldPassword')?.touched"
              [controlErrors]="updatePasswordForm.get('oldPassword')?.errors"
            ></validator>
          </div>

          <div class="form-group">
            <label for="new-password">New password</label>
            <input
              type="password"
              class="form-control"
              id="new-password"
              formControlName="newPassword"
            />

            <validator
              [isTouched]="updatePasswordForm.get('newPassword')?.touched"
              [controlErrors]="updatePasswordForm.get('newPassword')?.errors"
            ></validator>
          </div>

          <div class="form-group">
            <label for="repeat-password">Repeat new password</label>
            <input
              type="password"
              class="form-control"
              id="repeat-password"
              formControlName="repeatPassword"
            />

            <validator
              [isTouched]="updatePasswordForm.get('repeatPassword')?.touched"
              [controlErrors]="updatePasswordForm?.errors"
            ></validator>
          </div>

          <div class="modal-action-buttons">
            <button
              class="btn btn-secondary"
              (click)="matDialogRef.close()"
              type="button"
            >
              Cancel
            </button>
            <button class="btn btn-primary" type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['update-user-password-modal.component.scss'],
})
export class UpdateUserPasswordModalComponent {
  public updatePasswordForm: FormGroup;
  private apolloBase: ApolloBase;

  constructor(
    private formBuilder: FormBuilder,
    private apolloProvider: Apollo,
    public matDialogRef: MatDialogRef<UpdateUserPasswordModalComponent>
  ) {
    this.apolloBase = this.apolloProvider.use(GraphQLClients.MAIN);
    this.updatePasswordForm = formBuilder.group(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validators: comparePasswords }
    );
  }

  public submitUpdatePasswordForm(): void {
    if (this.updatePasswordForm.invalid) {
      return;
    }

    const { oldPassword, newPassword, repeatPassword }: IUpdateUserPassword =
      this.updatePasswordForm.value;

    this.apolloBase
      .mutate({
        mutation: UPDATE_PASSWORD,
        variables: {
          oldPassword,
          newPassword,
          repeatPassword,
        },
      })
      .subscribe(
        (val) => {
          this.matDialogRef.close();
        },
        (error) => {
          console.log('There was an error sending the query', error);
        }
      );
  }
}
