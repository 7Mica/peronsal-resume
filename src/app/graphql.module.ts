import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3000/graphql';

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink): ApolloClientOptions<any> => ({
        link: httpLink.create({ uri }),
        cache: new InMemoryCache(),
      }),
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
