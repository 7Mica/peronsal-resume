import { gql } from 'apollo-angular';

export const GITHUB_BUILDCOMMIT = gql`
  query getCurrentBuildCommit {
    getCurrentBuildCommit {
      build_id
    }
  }
`;
