import {useState, useEffect} from 'react'
import { useQuery } from "@apollo/react-hooks"
import { GET_COMETS_QUERY } from "../queries/getComets.js"
import './Comets.css'

export default function Comets() {
  const [comets, setComets] = useState([])
  const {
    data,
    loading,
    error
  } = useQuery(GET_COMETS_QUERY)

  useEffect(() => {
    if (loading === false && data) {
      setComets([...comets, ...data.comets])
    }
  }, [loading, data])
  
  if (loading) return <div className="comets__loading--image"><p className="comets__loading--text">Almost there...</p></div>
  if (error) return <p>{error.message}</p>

  return(
    <>
      <h2>Comets</h2>
      
      {/* {comets.map(comet => (
        <ul key={comet.date}>
          <li>
            Lat: {comet.lat}, Lon: {comet.lon}
          </li>
        </ul>
      ))} */}
    </>
  )
}