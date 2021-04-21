import { gql } from "graphql-tag"

export const GET_COMETS_QUERY = gql`
  query getComets {
      comets {
      date
      lat
      lon
      alt
      energy
      impactE
      latDir
      lonDir
      vel
    }
  }
`