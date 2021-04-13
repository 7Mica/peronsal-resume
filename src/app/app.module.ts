import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ThemeColorDirectiveModule } from '@core/directives/theme-color.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    ThemeColorDirectiveModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
