import { gql } from "graphql-tag"

export const GET_COMETS_QUERY = gql`
  query getComets {
    root {
      date
      energy
      impactE
      lat
      latDir
      lon
      lonDir
      alt
      vel
    }
  }
`