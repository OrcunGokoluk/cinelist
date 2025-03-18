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


  return (
    <>
    <article className='movie-general-info'>
       <div className='image-filter-container'>
                <img className='movie-backdrop-image' src={ movie.backdrop_path
            ?"https://image.tmdb.org/t/p/w500/"+ `${movie.backdrop_path}`:"../../public/placeholder.jpg"} />
        </div>
        <section className='movie-detail-info'>
            <section className='movie-detail-poster-image-container'>
            <img className='movie-detail-poster-image' src={ movie.poster_path
                ?"https://image.tmdb.org/t/p/w500/"+ `${movie.poster_path}`:"../../public/placeholder.jpg"} />
            </section>
            <section className='movie-detail-body-container'>
                <div className='movie-detail-title-container'>
                    <p className='movie-detail-title'>{movie.original_title}</p>
                    <p className='no-thickness'>({ movie.release_date ? movie.release_date.slice(0,4): ""})</p>
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
