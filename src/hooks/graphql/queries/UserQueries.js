import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetAllUsers {
    get_all_users {
      _id
      firstName
      secondName
      email
      role
    }
  }
`;

export const GET_ALL_USERS_DETAILS = gql`
  query GetAllUsersDetails {
    get_all_users_details {
      _id
      firstName
      secondName
      email
      posts {
        _id
        title
        date_posted
      }
    }
  }
`;
