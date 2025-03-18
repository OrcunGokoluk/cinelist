import React from 'react'

function Searchbar() {
  return (
    <>
        <form className="search-form" action="">
            <label className="label" htmlFor="query">Search a movie:</label>
            <input type="text" name="query" placeholder='What do you want to watch?' />
            <button type="submit">Search</button>
        </form>
      
    </>
  )
}

export default Searchbar
