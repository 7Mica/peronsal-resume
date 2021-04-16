import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeColorService } from '@core/services/theme-color.service';
import { PrimaryFooterComponent } from './primary-footer.component';

@NgModule({
  declarations: [PrimaryFooterComponent],
  imports: [FormsModule, RouterModule],
  providers: [ThemeColorService],
  exports: [PrimaryFooterComponent],
})
export class PrimaryFooterModule {}
