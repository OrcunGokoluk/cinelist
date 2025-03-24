import React from 'react'
import{ useParams } from "react-router-dom"

function Actors() {

    const [actors, setActors]=React.useState([]);

    const params = useParams()
    const apiKey = import.meta.env.VITE_API_KEY;


    // const style ={
    //     backgroundImage:  `url(${movie.backdrop_path
    //         ?"https://image.tmdb.org/t/p/w500/"+ `${movie.backdrop_path}`:"../../public/placeholder.jpg"})`,
    // }


    React.useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${apiKey}`)
        .then(res=>res.json())
        .then(data=>{
            setActors(data.cast)
            console.log(data.cast)})
        },[])

  return (
    <>
    { 
    <section className='actor-container'>
        {  
        actors ? actors.map((actor, index)=>(
            <div className='actor'>
                {
                     actor.profile_path ? <img className='actor-image' key={index} src={`${"https://image.tmdb.org/t/p/w500"+ actor.profile_path}`}/> : <img key={index} className="actor-placeholder" src="../../../public/actorplaceholder.jpg"/>
                }
                
            <p key={index}>{actor.name}</p>
            </div>        
         )):<div className='overview-placeholder'></div>
         }
    </section>

      }
    </>
  )
}

export default Actors
