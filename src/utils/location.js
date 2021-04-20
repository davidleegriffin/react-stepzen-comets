import ApolloClient from "apollo-boost"

const {
  REACT_APP_GOOGLE_MAPS_API_KEY
} = process.env

export const location = new ApolloClient({
  headers: {
    Authorization: `Apikey ${REACT_APP_GOOGLE_MAPS_API_KEY}`,
  }
})