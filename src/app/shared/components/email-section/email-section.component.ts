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
      email: fb.control('', [Validators.required, Validators.email]),
    });
  }

  handleSubmit(): void {
    console.log(this.emailForm.value);
  }
}
