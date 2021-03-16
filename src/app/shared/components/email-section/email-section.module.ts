import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailSectionComponent } from './email-section.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  declarations: [EmailSectionComponent],
  exports: [EmailSectionComponent],
})
export class EmailSectionModule {}
