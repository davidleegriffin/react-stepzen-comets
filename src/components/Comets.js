import { useQuery } from "@apollo/react-hooks"
import { GET_COMETS_QUERY } from "../queries/getComets.js"

export default function Comets() {
  const {
    data,
    loading,
    error
  } = useQuery(GET_COMETS_QUERY)

  console.log(data);
  
  if (loading) return <p>Almost there...</p>
  if (!data) return null
  if (data) {const comets = data.comets}

  if (error) return <p>{error.message}</p>
  
  if (data !== undefined) {
    const comets = data.comets

  return (

    <>
      <h2>Comets</h2>
      
      {comets.map(comet => (
        <ul key={comet.date}>
          <li>
            {comet.lat}
          </li>
        </ul>
      ))}
    </>
  )
}
}