import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonComponent } from './toggle-button.component';

@NgModule({
  declarations: [ToggleButtonComponent],
  imports: [FormsModule],
  exports: [ToggleButtonComponent],
})
export class ToggleButtonModule {}
