import { NgModule } from '@angular/core';
import { PrimaryHeaderComponent } from './primary-header.component';
import { FixedHeaderDirective } from './fixed-header.directive';

@NgModule({
  declarations: [PrimaryHeaderComponent, FixedHeaderDirective],
  exports: [PrimaryHeaderComponent],
})
export class PrimaryHeaderModule {}
