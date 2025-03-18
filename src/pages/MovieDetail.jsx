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
            setMovie(data)}
        )

        fetch(videourl)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setVideo(data)
        })

    },[])


  return (
    <>
    <article className='movie-general-info'>
    <img className='movie-backdrop-image' src={ movie.backdrop_path
 ?"https://image.tmdb.org/t/p/w500/"+ `${movie.backdrop_path}`:"../../public/placeholder.jpg"} />
    </article>

    </>
  )
}

export default MovieDetail
