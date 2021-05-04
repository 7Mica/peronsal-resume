import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AbilityListComponent } from './ability-list.component';

@NgModule({
  declarations: [AbilityListComponent],
  imports: [ReactiveFormsModule, CommonModule, CKEditorModule],
  exports: [AbilityListComponent],
})
export class AbilityListModule {}
