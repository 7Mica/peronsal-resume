import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { LayoutModule } from '@shared/layout/layout.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderTitleModule } from '@core/services/header-title.service';
import { ReplaySubject } from 'rxjs';
import { IHeaderTitle } from '@core/interfaces/header-title.interface';
import { TokenInterceptor } from '@core/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    HeaderTitleModule.forRoot({
      titleSource: new ReplaySubject<IHeaderTitle>(),
    }),
    CoreModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
