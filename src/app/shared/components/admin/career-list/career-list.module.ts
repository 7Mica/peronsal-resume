import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerListComponent } from './career-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [CareerListComponent],
  imports: [ReactiveFormsModule, CommonModule, CKEditorModule],
  exports: [CareerListComponent],
})
export class CareerListModule {}
