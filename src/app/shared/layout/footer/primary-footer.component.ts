import { Component, OnInit } from '@angular/core';
import { GraphQLClients } from '@core/enums/graphql-clients.enum';
import { GITHUB_BUILDCOMMIT } from '@core/graphql/queries/github.queries';
import { SignedStatus } from '@core/interfaces/signed-status.interface';
import { ITheme } from '@core/interfaces/theme.interface';
import { AccountService } from '@core/services/account.service';
import { ThemeColorService } from '@core/services/theme-color.service';
import { Apollo, ApolloBase } from 'apollo-angular';
import { EMPTY, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'primary-footer',
  templateUrl: 'primary-footer.component.html',
  styleUrls: ['primary-footer.component.scss'],
})
export class PrimaryFooterComponent implements OnInit {
  theme = 'primary-theme';
  public selectedTheme$: Observable<ITheme> = EMPTY;
  public signedStatus$: Observable<SignedStatus>;
  public buildCommit$: Observable<any>;
  private apolloBase: ApolloBase;

  constructor(
    private themeService: ThemeColorService,
    private accountService: AccountService,
    private apolloProvider: Apollo
  ) {
    this.signedStatus$ = this.accountService.observeSignedInStatus();
    this.apolloBase = this.apolloProvider.use(GraphQLClients.MAIN);

    this.buildCommit$ = this.apolloBase
      .query({ query: GITHUB_BUILDCOMMIT })
      .pipe(
        map(({ data }: any) => data?.getCurrentBuildCommit?.build_id),
        tap((e) => console.log(e))
      );
  }

  ngOnInit(): void {
    this.selectedTheme$ = this.themeService
      .themeValueChanged()
      .pipe(tap((theme: ITheme) => (this.theme = theme.name)));
  }

  public closeSession(): void {
    this.accountService.signOut();
  }

  handleChangedTheme(): void {
    switch (this.theme) {
      case 'primary-theme':
        this.themeService.setPrimaryTheme();
        break;
      case 'secondary-theme':
        this.themeService.setSecondaryTheme();
        break;
      case 'tertiary-theme':
        this.themeService.setTertiaryTheme();
        break;
      default:
        break;
    }
  }
}
