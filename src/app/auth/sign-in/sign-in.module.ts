import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ValidatorModule } from '@shared/components/form/validator/validator.module';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    component: SignInComponent,
    path: '',
  },
];

@NgModule({
  declarations: [SignInComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    ValidatorModule,
  ],
})
export class SignInModule {}
