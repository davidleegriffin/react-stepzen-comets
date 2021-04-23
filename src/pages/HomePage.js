import { useState, useEffect } from 'react'
import { useQuery } from "@apollo/react-hooks"
import { GET_COMETS_QUERY } from "../queries/getComets.js"

import SearchLocation from "../components/SearchLocation"
import Footer from '../components/Footer'

import './HomePage.css'

export default function HomePage() {
  const [comets, setComets] = useState([])
  const {
    data,
    loading,
    error
  } = useQuery(GET_COMETS_QUERY)

  useEffect(() => {
    if (loading === false && data) {
      setComets(state => [...comets, ...data.comets])
      console.log(comets)
    }
  }, [loading, data])
  
  if (loading) return <div className="comets__loading--image"><p className="comets__loading--text">Almost there...</p></div>

  if (error) return <p>{error.message}</p>

  return (
    <>
      <img src="./images/starry_sky_background.jpeg" id="background-image" alt="starry sky"></img>
      <div className='fireballs-header'>
        <img src={'./images/comet_crash.gif'} />
        <div class="head-text-container">
          <div class="head-text-background-color">
            <p className="comet__fireballs">Fireballs</p>
          </div>
      </div>
      </div>
      {/* <Comets comets={comets} setComets={setComets}/> */}
      <SearchLocation comets={comets} />
      <Footer />
    </>
  )
}
