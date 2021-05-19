import {
  Injectable,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { IHeaderTitle } from '@core/interfaces/header-title.interface';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderTitleService {
  private titleSource: ReplaySubject<IHeaderTitle>;

  constructor(@Optional() titleConfig: HeaderTitleConfig) {
    this.titleSource = titleConfig.titleSource;
  }

  public getTitle(): Observable<IHeaderTitle> {
    return this.titleSource.asObservable();
  }

  public setTitle(headerTitle: IHeaderTitle): void {
    this.titleSource.next(headerTitle);
  }
}

export class HeaderTitleConfig {
  titleSource: ReplaySubject<IHeaderTitle> = new ReplaySubject<IHeaderTitle>();
}

@NgModule()
export class HeaderTitleModule {
  constructor(@Optional() @SkipSelf() parentModule?: HeaderTitleModule) {
    if (parentModule) {
      throw new Error(
        'HeaderTitleModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: HeaderTitleConfig
  ): ModuleWithProviders<HeaderTitleModule> {
    return {
      ngModule: HeaderTitleModule,
      providers: [{ provide: HeaderTitleConfig, useValue: config }],
    };
  }
}
