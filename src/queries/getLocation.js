import { gql } from "graphql-tag"

export const GET_LOCATION_QUERY = gql`
  query getLocation($sendAddress: String!) {
    getLocation(sendAddress: $sendAddress){
      lat
      lng
    }
  }
`