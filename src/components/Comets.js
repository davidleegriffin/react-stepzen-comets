import { useQuery } from "@apollo/react-hooks"
import { GET_COMETS_QUERY } from "../queries/getComets.js"

export default function Comets() {
  const {
    root,
    loading,
    error
  } = useQuery(GET_COMETS_QUERY)

  const comets = root?.getComets
  console.log(root?.getComets);
  
  if (loading) return <p>Almost there...</p>
  if (error) return <p>{error.message}</p>
  
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