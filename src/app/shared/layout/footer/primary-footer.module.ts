import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimaryFooterComponent } from './primary-footer.component';

@NgModule({
  declarations: [PrimaryFooterComponent],
  imports: [FormsModule, RouterModule, CommonModule],
  exports: [PrimaryFooterComponent],
})
export class PrimaryFooterModule {}
