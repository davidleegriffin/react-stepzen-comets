// import {useState, useEffect} from 'react'
// import { useQuery } from "@apollo/react-hooks"
// import { GET_METEORS_QUERY } from "../queries/getMeteors.js"
// import './Meteors.css'

// export default function Meteors({comets, setComets}) {
//   // const [comets, setComets] = useState([])
//   const {
//     data,
//     loading,
//     error
//   } = useQuery(GET_METEORS_QUERY)

//   useEffect(() => {
//     if (loading === false && data) {
//       setComets(state => [...comets, ...data.comets])
//       console.log(comets)
//     }
//   }, [loading, data])
  
//   if (loading) return <div className="comets__loading--image"><p className="comets__loading--text">Almost there...</p></div>

//   if (error) return <p>{error.message}</p>

//   return(
//     <>
    
//     </>
//   )
// }
