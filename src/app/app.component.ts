import { Component, OnInit } from '@angular/core';
import { AccountService } from '@core/services/account.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    // On first time load it checks if users is signed in or not
    this.accountService.callIfUserIsSignedIn().subscribe();
  }
}
