import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateUserPasswordModule } from '@shared/components/admin/update-user-password-modal/update-user-password-modal.module';
import { PrimaryFooterComponent } from './primary-footer.component';

@NgModule({
  declarations: [PrimaryFooterComponent],
  imports: [FormsModule, RouterModule, CommonModule, UpdateUserPasswordModule],
  exports: [PrimaryFooterComponent],
})
export class PrimaryFooterModule {}
