import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main id="main-content" class="main-theme" themeColor>
      <primary-header></primary-header>
      <router-outlet></router-outlet>
      <primary-footer></primary-footer>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
