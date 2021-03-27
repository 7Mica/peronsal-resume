import { NgModule } from '@angular/core';
import { PrimaryHeaderComponent } from './primary-header.component';
import { FixedHeaderDirective } from './fixed-header.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrimaryHeaderComponent, FixedHeaderDirective],
  imports: [RouterModule],
  exports: [PrimaryHeaderComponent],
})
export class PrimaryHeaderModule {}
