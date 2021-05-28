import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ValidatorModule } from '@shared/components/form/validator/validator.module';
import { UpdateUserPasswordModalComponent } from './update-user-password-modal.component';

@NgModule({
  declarations: [UpdateUserPasswordModalComponent],
  imports: [MatDialogModule, FormsModule, ReactiveFormsModule, ValidatorModule],
})
export class UpdateUserPasswordModule {}
