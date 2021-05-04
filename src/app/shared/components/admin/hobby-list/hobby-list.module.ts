import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HobbyListComponent } from '@shared/components/admin/hobby-list/hobby-list.component';

@NgModule({
  declarations: [HobbyListComponent],
  imports: [ReactiveFormsModule, CommonModule, CKEditorModule],
  exports: [HobbyListComponent],
})
export class HobbyListModule {}
