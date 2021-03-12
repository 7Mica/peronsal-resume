import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
