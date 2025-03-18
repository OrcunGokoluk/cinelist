import React from 'react'
import MovieCard from './MovieCard';

function Searchbar() {
const [movieName, setMovieName] = React.useState(null)
const [moviedata, setData] = React.useState([])
const [pageNumber, setPageNumber] = React.useState(1)  

const apiKey = import.meta.env.VITE_API_KEY;

 async function searchMovies(formData) {

  const movieName = formData.get("query").trim()
  setMovieName(movieName)

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=${pageNumber}&include_adult=true`

  try{
    const res = await fetch(url)
    const data = await res.json();
    console.log(data.results)
    setData(data.results)
    
  }catch(err){
    console.error(err)
  }
 }

 React.useEffect(()=>{
if(movieName){
  console.log(pageNumber)
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=${pageNumber}&include_adult=false`

  fetch(url)
  .then(res=>res.json())
  .then(data=>setData(data.results))
}
 },[pageNumber])

  return (
    <>
        <form className="search-form" action={searchMovies}>
            <label className="label" htmlFor="query">Search a movie:</label>
            <input type="text" name="query" placeholder='What do you want to watch?' />
            <button type="submit">Search</button>
        </form>
    <article className='movie-card-container'>
    {
         moviedata ? moviedata.map( (data, index)=><MovieCard key={index} id={data.id} image={data.poster_path}
         overview={data.overview} title={data.title} imdb={data.
          vote_average}/>):""    
        }
    </article>


      {  
      movieName ?  
            <div className='page-buttons'>
                <button onClick={()=>setPageNumber(prev=>prev-1)}>Previous</button>
                  <p>{pageNumber}</p>
                <button onClick={()=>setPageNumber(prev=>prev+1)}>Next</button>
            </div> :""
      }

      
    </>
  )
}

export default Searchbar
