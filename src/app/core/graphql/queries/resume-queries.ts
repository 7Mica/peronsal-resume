import { gql } from 'apollo-angular';

export const DELETE_RESUME = gql`
  mutation deleteResume($resumeId: String!) {
    deleteResume(resumeId: $resumeId)
  }
`;

export const DELETE_HOBBY = gql`
  mutation deleteHobby($hobbyId: String!) {
    deleteHobby(hobbyId: $hobbyId)
  }
`;

export const DELETE_CAREER = gql`
  mutation deleteCareer($careerId: String!) {
    deleteCareer(careerId: $careerId)
  }
`;

export const DELETE_ABILITY = gql`
  mutation deleteAbility($abilityId: String!) {
    deleteAbility(abilityId: $abilityId)
  }
`;

export const DELETE_CERTIFICATION = gql`
  mutation deleteCertification($certificationId: String!) {
    deleteCertification(certificationId: $certificationId)
  }
`;

export const NEW_RESUME = gql`
  mutation newResume(
    $firstName: String!
    $lastName: String!
    $country: String!
    $state: String!
    $city: String!
    $age: Int!
    $profileImage: String!
    $about: String!
    $selected: Boolean!
    $careers: [CareerInput!]!
    $abilities: [AbilityInput!]!
    $hobbies: [HobbyInput!]!
    $certifications: [CertificationInput!]!
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
        certifications: $certifications
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
        weight
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
        weight
        endDate
      }
      hobbies {
        id
        description
        name
        weight
      }
      certifications {
        certificationCode
        certificationDescription
        certificationImageUrl
        id
        status
      }
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation updateResume(
    $id: String!
    $firstName: String!
    $lastName: String!
    $country: String!
    $state: String!
    $city: String!
    $age: Int!
    $profileImage: String!
    $about: String!
    $selected: Boolean!
    $careers: [CareerInput!]!
    $abilities: [AbilityInput!]!
    $hobbies: [HobbyInput!]!
    $certifications: [CertificationInput!]!
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
        certifications: $certifications
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
        description
        weight
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
        weight
      }
      hobbies {
        id
        description
        name
        image
        imagehd
        weight
      }
      certifications {
        certificationCode
        certificationDescription
        certificationImageUrl
        id
        status
        weight
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
        description
        weight
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
        weight
      }
      hobbies {
        id
        description
        name
        image
        imagehd
        weight
      }
      certifications {
        certificationCode
        certificationDescription
        certificationImageUrl
        certificationUrl
        id
        status
        weight
      }
    }
  }
`;
