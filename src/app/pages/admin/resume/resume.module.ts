import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ResumeComponent } from './resume.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SaveButtonScrollResumeModule } from '@core/directives/save-button-scroll-resume.directive';
import { FormArrayPipe } from '@core/pipes/form-array.pipe';

const ROUTES: Routes = [
  {
    path: '',
    component: ResumeComponent,
  },
];

@NgModule({
  declarations: [ResumeComponent, FormArrayPipe],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    CKEditorModule,
    SaveButtonScrollResumeModule,
    RouterModule.forChild(ROUTES),
  ],
})
export class ResumeModule {}
