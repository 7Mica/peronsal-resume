import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CareerListComponent } from './career-list.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ValidatorModule } from '@shared/components/form/validator/validator.module';

@NgModule({
  declarations: [CareerListComponent],
  imports: [ReactiveFormsModule, CommonModule, CKEditorModule, ValidatorModule],
  exports: [CareerListComponent],
})
export class CareerListModule {}
