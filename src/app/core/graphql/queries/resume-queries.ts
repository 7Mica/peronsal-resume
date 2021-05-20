import { gql } from 'apollo-angular';

export const DELETE_RESUME = gql`
  mutation deleteResume($resumeId: String!) {
    deleteResume(resumeId: $resumeId)
  }
`;

export const NEW_RESUME = gql`
  mutation newResume(
    $firstName: String!
    $lastName: String!
    $country: String
    $state: String
    $city: String
    $age: Int!
    $profileImage: String!
    $about: String!
    $selected: Boolean!
    $careers: [CareerInput!]!
    $abilities: [AbilityInput!]!
    $hobbies: [HobbyInput!]!
  ) {
    newResume(
      resumeInput: {
        firstName: $firstName
        lastName: $lastName
        country: $country
        state: $state
        city: $city
        age: $age
        profileImage: $profileImage
        about: $about
        selected: $selected
        careers: $careers
        abilities: $abilities
        hobbies: $hobbies
      }
    ) {
      id
      firstName
      lastName
      about
      age
      city
      country
      profileImage
      selected
      state
      abilities {
        id
        abilityName
        percent
        logo
      }
      careers {
        companyName
        country
        description
        id
        state
        jobTitle
        city
        startDate
        endDate
      }
      hobbies {
        id
        description
        name
      }
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation updateResume(
    $id: String!
    $firstName: String!
    $lastName: String!
    $country: String
    $state: String
    $city: String
    $age: Int!
    $profileImage: String!
    $about: String!
    $selected: Boolean!
    $careers: [CareerInput!]!
    $abilities: [AbilityInput!]!
    $hobbies: [HobbyInput!]!
  ) {
    updateResume(
      resumeId: $id
      resumeInput: {
        firstName: $firstName
        lastName: $lastName
        country: $country
        state: $state
        city: $city
        age: $age
        profileImage: $profileImage
        about: $about
        selected: $selected
        careers: $careers
        abilities: $abilities
        hobbies: $hobbies
      }
    ) {
      success
      error
    }
  }
`;

export const SELECTED_RESUME = gql`
  query {
    getDefaultResume {
      id
      firstName
      lastName
      about
      age
      city
      country
      profileImage
      selected
      state
      abilities {
        id
        abilityName
        percent
        logo
      }
      careers {
        companyName
        country
        description
        id
        state
        jobTitle
        city
        startDate
        endDate
      }
      hobbies {
        id
        description
        name
        image
        imagehd
      }
    }
  }
`;

export const RESUME_LIST = gql`
  {
    resumeList {
      id
      firstName
      lastName
      about
      age
      city
      country
      profileImage
      selected
      state
      abilities {
        id
        abilityName
        percent
        logo
      }
      careers {
        companyName
        country
        description
        id
        state
        jobTitle
        city
        startDate
        endDate
      }
      hobbies {
        id
        description
        name
        image
        imagehd
      }
    }
  }
`;
