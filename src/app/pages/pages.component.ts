import { Component } from '@angular/core';

@Component({
  selector: 'pages-root',
  template: `
    <main id="main-content" class="secondary-theme" themeColor>
      <primary-header></primary-header>
      <tool-bar></tool-bar>
      <router-outlet></router-outlet>
      <primary-footer></primary-footer>
    </main>
  `,
  styles: [],
})
export class PagesComponent {}
