import { NgModule } from '@angular/core';
import { CertificationListComponent } from '@shared/components/admin/certification-list/certification-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorModule } from '@shared/components/form/validator/validator.module';

@NgModule({
  declarations: [CertificationListComponent],
  exports: [CertificationListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidatorModule]
})
export class CertificationListModule {
}
