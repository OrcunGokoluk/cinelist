import React from 'react'
import { Link } from "react-router-dom"

function MovieCard( {image, overview, title, imdb}) {

    console.log(image)

    function roundNumber(number, decimals) {
        const factor = Math.pow(10, decimals);
        return Math.round(number * factor) / factor;
      }
  return (
    <>
    <Link className='movie-card'>
            <img className='poster-image' src={ image ?"https://image.tmdb.org/t/p/w500/"+ `${image}`: "../../public/placeholder.jpg"}/>

            <section className='description'>
                <p className='secondary-title'>{title}</p>
                <p className='imdb'>imdb:{roundNumber(imdb,2)}</p>
                <p className='overview'>{overview.slice(0,120)+"..."}</p>
            </section>
    </Link>
    </>
  )
}

export default MovieCard
