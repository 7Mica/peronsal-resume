import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public getValue(property: string): any {
    return localStorage.getItem(property);
  }

  public setValue(property: string, value: any): void {
    localStorage.setItem(property, value);
  }

  public removeValue(property: string): void {
    localStorage.removeItem(property);
  }
}
