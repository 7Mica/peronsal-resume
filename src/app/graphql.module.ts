import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';

const uri = environment.graphQLServerUri;

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<any> => ({
        link: httpLink.create({ uri }),
        cache: new InMemoryCache({
          addTypename: false,
          typePolicies: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Query: {
              fields: {
                resumeList: {
                  // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                  merge(existing, incoming) {
                    return incoming;
                  },
                },
              },
            },
          },
        }),
      }),
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
