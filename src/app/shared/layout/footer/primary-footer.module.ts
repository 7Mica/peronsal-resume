import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeColorService } from '@core/services/theme-color.service';
import { PrimaryFooterComponent } from './primary-footer.component';

@NgModule({
  declarations: [PrimaryFooterComponent],
  imports: [FormsModule],
  providers: [ThemeColorService],
  exports: [PrimaryFooterComponent],
})
export class PrimaryFooterModule {}
