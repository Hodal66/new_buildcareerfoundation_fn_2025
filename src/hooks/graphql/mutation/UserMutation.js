import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($input: UserSignUpInput!) {
    sign_up(input: $input) {
      token
      user {
        _id
        firstName
        secondName
        email
        role
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserUpdateInput!) {
    update_user(id: $id, input: $input) {
      _id
      firstName
      secondName
      email
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    delete_user(id: $id)
  }
`;
