import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeColorDirectiveModule } from '@core/directives/theme-color.directive';
import { ToolBarModule } from '@shared/components/tool-bar/tool-bar.component';
import { PrimaryFooterModule } from '@shared/layout/footer/primary-footer.module';
import { PrimaryHeaderModule } from '@shared/layout/header/primary-header.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    RouterModule.forChild(PAGES_ROUTES),
    PrimaryHeaderModule,
    PrimaryFooterModule,
    ToolBarModule,
    ThemeColorDirectiveModule,
  ],
})
export class PagesModule {}
