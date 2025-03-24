import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Overview() {

    const  movie  = useOutletContext();
    console.log(movie)

  return (
    <>
        <p className='tagline'>{movie.tagline}</p>
        
        <div className='movie-detail-overview'>
        {
            movie.overview ?
            <p>{movie.overview}</p>:
            <div className='overview-placeholder'>

            </div>
        }
        {
            movie.overview?.length<450 ?
            <div className='overview-placeholder'>

            </div>:""
        }
        </div>
    </>

  )
}

export default Overview
