import { Injectable } from '@angular/core';
import { IHeaderTitle } from '@core/interfaces/header-title.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  private titleSource = new Subject<IHeaderTitle>();

  public getTitle(): Observable<IHeaderTitle> {
    return this.titleSource.asObservable();
  }

  public setTitle(headerTitle: IHeaderTitle): void {
    this.titleSource.next(headerTitle);
  }
}
