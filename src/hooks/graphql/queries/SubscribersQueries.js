import { gql } from "@apollo/client";

export const GET_ALL_SUBSCRIBERS = gql`
query Query {
  getAllSubscriptions {
    id
    subscriptionWithEmail
    date_subscribed
  }
}

`