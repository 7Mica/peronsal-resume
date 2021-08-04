import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { AccountInformation } from '@core/interfaces/account-information.interface';
import { SignedStatus } from '@core/interfaces/signed-status.interface';
import { AccountService } from '@core/services/account.service';
import {
  EditablePageService,
  EditableState,
} from '@core/services/editable-page.service';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UpdateUserPasswordModalComponent } from '../admin/update-user-password-modal/update-user-password-modal.component';

@Component({
  selector: 'tool-bar',
  styleUrls: ['./tool-bar.component.scss'],
  template: `
    <ng-container *ngIf="signedStatus$ | async as signedStatus">
      <div class="tool-bar" *ngIf="signedStatus.isSignedIn">
        <ul class="tool-bar-items">
          <ng-container
            *ngIf="accountInformation$ | async as accountInformation"
          >
            <li class="tool-bar-item" *ngIf="accountInformation">
              <span class="email-account"> {{ accountInformation.email }} </span>
            </li>
          </ng-container>

          <ng-container
            *ngIf="editablePageStatus$ | async as editablePageStatus"
          >
            <li class="tool-bar-item" *ngIf="editablePageStatus.editable">
              <a [routerLink]="editablePageStatus.editionPage"> Edit Page </a>
            </li>
          </ng-container>

          <li class="tool-bar-item">
            <a (click)="updatePassword()"> Update Password </a>
          </li>
          <li class="tool-bar-item">
            <a (click)="closeSession()"> Close session </a>
          </li>
        </ul>
      </div>
    </ng-container>
  `,
})
export class ToolBarComponent implements OnDestroy {
  public editablePageStatus$: Observable<EditableState>;
  public signedStatus$: Observable<SignedStatus>;
  public accountInformation$: Observable<AccountInformation | null>;
  private routeChanged$: Subscription;

  constructor(
    private editablePage: EditablePageService,
    private router: Router,
    private accountService: AccountService,
    private matDialog: MatDialog
  ) {
    this.routeChanged$ = this.router.events
      .pipe(filter((navEvent: Event) => navEvent instanceof NavigationEnd))
      .subscribe(() => {
        this.editablePage.removeEditable();
      });

    this.signedStatus$ = this.accountService.observeSignedInStatus();
    this.accountInformation$ = this.accountService.observeAccountInformation();
    this.editablePageStatus$ = this.editablePage.tellMeIfEditable();
  }

  ngOnDestroy(): void {
    this.routeChanged$.unsubscribe();
  }

  public closeSession(): void {
    this.accountService.signOut();
  }

  public updatePassword(): void {
    this.matDialog.open(UpdateUserPasswordModalComponent, {
      width: '100%',
      maxWidth: '480px',
    });
  }
}

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ToolBarComponent],
})
export class ToolBarModule {}
