import {useState, useEffect} from 'react'
import { useQuery } from "@apollo/react-hooks"
import { GET_COMETS_QUERY } from "../queries/getComets.js"

export default function Comets() {
  const [state, setState] = useState([])
  const {
    data,
    loading,
    error
  } = useQuery(GET_COMETS_QUERY)

  useEffect(() => {
    if (loading === false && data) {
      setState([...state, ...data.comets])
    }
  }, [loading, data])
  
  if (loading) return <p>Almost there...</p>
  // if (!data) return null

  if (error) return <p>{error.message}</p>

  if (data !== undefined) {
    console.log(data.comets)
    const comets = data.comets
    // localStorage.setItem("comets", comets)
    // let coms = localStorage.getItem("comets")
    // console.log(coms)
    console.log(state)

  return(
    <>
      <h2>Comets</h2>
      
      {comets.map(comet => (
        <ul key={comet.date}>
          <li>
            Lat: {comet.lat}, Lon: {comet.lon}
          </li>
        </ul>
      ))}
    </>
  )
}
}