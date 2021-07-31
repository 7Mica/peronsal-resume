import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditablePageService {
  private isEditable: BehaviorSubject<EditableState> =
    new BehaviorSubject<EditableState>({
      editable: false,
    });

  public tellMeIfEditable(): Observable<EditableState> {
    return this.isEditable.asObservable();
  }

  public announceIfEditable(state: EditableState): void {
    this.isEditable.next(state);
  }

  public removeEditable(): void {
    this.isEditable.next({ editable: false });
  }
}

export interface EditableState {
  editionPage?: string;
  editable: boolean;
}
