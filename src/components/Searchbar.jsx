import React from 'react'
import MovieCard from './MovieCard';

function Searchbar() {
const [moviedata, setData] = React.useState([])

 async function searchMovies(formData) {

  const movieName = formData.get("query")
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log(apiKey)

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=1&include_adult=false`

  try{
    const res = await fetch(url)
    const data = await res.json();
    console.log(data.results)
    setData(data.results)
    
  }catch(err){
    console.error(err)
  }


 }


  return (
    <>
        <form className="search-form" action={searchMovies}>
            <label className="label" htmlFor="query">Search a movie:</label>
            <input type="text" name="query" placeholder='What do you want to watch?' />
            <button type="submit">Search</button>
        </form>
    <article className='movie-card-container'>
    {
         moviedata ? moviedata.map(data=><MovieCard image={data.poster_path}
         overview={data.overview} title={data.title}/>):""    
        }
    </article>
      
    </>
  )
}

export default Searchbar
