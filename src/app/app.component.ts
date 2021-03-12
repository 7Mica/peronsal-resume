import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <primary-header></primary-header>
    <router-outlet></router-outlet>
    <primary-footer></primary-footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'personal-resume';
}
