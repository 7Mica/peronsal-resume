import { NgModule } from '@angular/core';
import { CertificationListComponent } from '@shared/components/admin/certification-list/certification-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CertificationListComponent],
  exports: [CertificationListComponent],
  imports: [CommonModule]
})
export class CertificationListModule {
}
