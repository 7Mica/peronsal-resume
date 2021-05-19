import { Injectable } from '@angular/core';
import { ITheme } from '@core/interfaces/theme.interface';
import { Observable, Subject } from 'rxjs';

export const primary: ITheme = {
  name: 'secondary',
  properties: {
    '--primary-color-c': '#e48257',
    '--secondary-color-c': '#3a6351',
    '--speedy-color-c': '#393232',
    '--quiet-color-c': '#f2edd7',
    '--btn-secondary-hover-c': '#3a6351a2',

    '--primary-color-rgb': '228, 130, 87',
    '--secondary-color-rgb': '58, 99, 81',
    '--speedy-color-rgb': '57, 50, 50',
    '--quiet-color-rgb': '242, 237, 215',
    '--btn-secondary-hover-rgb': '58, 99, 79',
  },
};

export const secondary: ITheme = {
  name: 'primary',
  properties: {
    '--primary-color-c': '#fed049',
    '--secondary-color-c': '#007580',
    '--speedy-color-c': '#282846',
    '--quiet-color-c': '#d8ebe4',
    '--btn-secondary-hover-c': '#0199a7',

    '--primary-color-rgb': '254, 208, 73',
    '--secondary-color-rgb': '0, 117, 128',
    '--speedy-color-rgb': '40, 40, 70',
    '--quiet-color-rgb': '216, 235, 228',
    '--btn-secondary-hover-rgb': '1, 153, 167',
  },
};

export const tertiary: ITheme = {
  name: 'tertiary',
  properties: {
    '--primary-color-c': '#008891',
    '--secondary-color-c': '#00587a',
    '--speedy-color-c': '#0f3057',
    '--quiet-color-c': '#e7e7de',
    '--btn-secondary-hover-c': '#00577a9a',

    '--primary-color-rgb': '0, 136, 145',
    '--secondary-color-rgb': '0, 88, 122',
    '--speedy-color-rgb': '15, 48, 87',
    '--quiet-color-rgb': '231, 231, 222',
    '--btn-secondary-hover-rgb': '0, 87, 119',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ThemeColorService {
  private active: ITheme = primary;
  private availableThemes: ITheme[] = [primary, secondary, tertiary];
  private themeChanged$: Subject<ITheme>;

  constructor() {
    this.themeChanged$ = new Subject<ITheme>();
  }

  getAvailableThemes(): ITheme[] {
    return this.availableThemes;
  }

  themeValueChanged(): Observable<ITheme> {
    return this.themeChanged$.asObservable();
  }

  getActiveTheme(): ITheme {
    return this.active;
  }

  setPrimaryTheme(): void {
    this.setActiveTheme(primary);
    this.themeChanged$.next(primary);
  }

  setSecondaryTheme(): void {
    this.setActiveTheme(secondary);
    this.themeChanged$.next(secondary);
  }

  setTertiaryTheme(): void {
    this.setActiveTheme(tertiary);
    this.themeChanged$.next(tertiary);
  }

  private setActiveTheme(theme: ITheme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
