import { gql } from "graphql-tag"

export const GET_LOCATION_QUERY = gql`
  query getLocation {
    results {
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }
`