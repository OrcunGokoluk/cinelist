import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Outlet, NavLink } from 'react-router-dom';

function MovieDetail() {
const params = useParams()
const[movie, setMovie] = useState({})

    useEffect(()=>{
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setMovie(data)}
        )
    },[])

    const styles = {
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${movie.backdrop_path
            ?"https://image.tmdb.org/t/p/w500/"+ `${movie.backdrop_path}`:"../../images/placeholder.jpg"})`,
        backgroundColor: "rgba(0, 0, 0, 0.63)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",


    }
console.log(styles.backgroundImage)

  return (
    <>
    <article className='movie-general-info'>
    <img style={{filter: "none"}} className='movie-detail-poster-image' src={ movie.poster_path
                ?"https://image.tmdb.org/t/p/w500/"+ `${movie.poster_path}`:"../../public/placeholder.jpg"} />
       <div className='image-filter-container' style={styles}>

       <section className='movie-detail-info'>
            <section className='movie-detail-poster-image-container'>

            </section>
            <section className='movie-detail-body-container'>
                <div className='movie-detail-title-container'>
                    <p className='movie-detail-title'>{movie.original_title}</p>
                    {movie.release_date ?
                        <p className='no-thickness release-date'>({ movie.release_date.slice(0,4)})</p>
                        :""
                    }
                </div>

                <nav className='movie-detail-nav'>
                    <NavLink className={({isActive})=>isActive?"active-detail-nav":""} to="." end>Overview</NavLink>
                    <NavLink className={({isActive})=>isActive?"active-detail-nav":""} to="actors">Actors</NavLink>
                </nav>

                <Outlet context={ movie } />

            </section>
        </section>
       </div>
    </article>

    </>
  )
}

export default MovieDetail
