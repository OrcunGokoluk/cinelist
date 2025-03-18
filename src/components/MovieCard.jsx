import React from 'react'

function MovieCard( {image, overview, title, imdb}) {
    console.log(image)
  return (
    <>
    <article className='poster-card'>
    {
        <img className='poster-image' src={ image ?"https://image.tmdb.org/t/p/w500/"+ `${image}`: "../../public/placeholder.jpg"}/>
    }

        <section className='description'>
            <p className='secondary-title'>{title}</p>
            <p className='overview'>{overview.slice(0,250)+"..."}</p>
            <p className='imdb'>imdb:{imdb}</p>
        </section>
    </article>

    </>
  )
}

export default MovieCard
