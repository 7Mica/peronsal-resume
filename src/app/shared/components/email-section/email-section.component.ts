import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'email-section',
  templateUrl: 'email-section.component.html',
  styleUrls: ['email-section.component.scss'],
})
export class EmailSectionComponent {
  public emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = fb.group({
      name: fb.control('', [Validators.required]),
      lastName: fb.control(''),
      email: fb.control('', [Validators.required, Validators.email]),
      message: fb.control('', [Validators.required]),
    });
  }

  handleSubmit(): void {
    console.log(this.emailForm.value);
  }
}
