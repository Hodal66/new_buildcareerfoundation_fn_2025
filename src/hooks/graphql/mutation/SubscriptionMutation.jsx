import { gql } from "@apollo/client";

export const DELETE_SUBSCRIBER = gql `
mutation DeleteSubscriber($input: ID!) {
  deleteSubscriber(input: $input) {
    isDeleted
    message
  }
}
`