import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetail() {
const params = useParams()

const[movie, setMovie] = useState({})
const[video, setVideo] = useState({})
    useEffect(()=>{
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
    const videourl = `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMovie(data)}
        )

        fetch(videourl)
        .then(res=>res.json())
        .then(data=>{
            setVideo(data)
        })

    },[])
    const styles = {
        backgroundImage:  ` linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${movie.backdrop_path
            ?"https://image.tmdb.org/t/p/w500/"+ `${movie.backdrop_path}`:"../../public/placeholder.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "sepia(1) hue-rotate(180deg) saturate(2)", /* Mavi renk tonu verir */
    }
console.log(styles.backgroundImage)

  return (
    <>
    <article className='movie-general-info'>

       <div className='image-filter-container' style={styles}></div>

        <section className='movie-detail-info'>
            <section className='movie-detail-poster-image-container'>
            <img className='movie-detail-poster-image' src={ movie.poster_path
                ?"https://image.tmdb.org/t/p/w500/"+ `${movie.poster_path}`:"../../public/placeholder.jpg"} />
            </section>
            <section className='movie-detail-body-container'>
                <div className='movie-detail-title-container'>
                    <p className='movie-detail-title'>{movie.original_title}</p>
                    <p className='no-thickness release-date'>({ movie.release_date ? movie.release_date.slice(0,4): ""})</p>
                </div>
                <div className='movie-detail-overview'>
                    <p>Overview:</p>
                    <p>{movie.overview}</p>
                </div>

            </section>

        </section>



    </article>

    </>
  )
}

export default MovieDetail
