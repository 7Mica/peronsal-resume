import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private nameProp = '';

  get name(): string {
    return this.nameProp;
  }

  set name(value: string) {
    this.nameProp = value;
  }
}
