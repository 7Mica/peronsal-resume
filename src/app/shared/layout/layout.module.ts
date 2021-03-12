import { NgModule } from '@angular/core';
import { PrimaryFooterModule } from './footer/primary-footer.module';
import { PrimaryHeaderModule } from './header/primary-header.module';

@NgModule({
  exports: [PrimaryHeaderModule, PrimaryFooterModule],
})
export class LayoutModule {}
