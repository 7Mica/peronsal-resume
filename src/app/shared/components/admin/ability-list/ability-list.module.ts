import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ValidatorModule } from '@shared/components/form/validator/validator.module';
import { AbilityListComponent } from './ability-list.component';

@NgModule({
  declarations: [AbilityListComponent],
  imports: [ReactiveFormsModule, CommonModule, CKEditorModule, ValidatorModule],
  exports: [AbilityListComponent],
})
export class AbilityListModule {}
