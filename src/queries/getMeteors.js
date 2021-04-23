import { gql } from "graphql-tag"

export const GET_METEORS_QUERY = gql`
  query getMeteors {
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