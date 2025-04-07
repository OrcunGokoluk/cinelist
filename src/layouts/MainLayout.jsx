import React from 'react'
import Searchbar from '../components/Searchbar'
import { Outlet,Link } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <header>
            <Link to="/"><h1 className='title'>Cine-List</h1></Link>
        </header>
        <Outlet/>
        <footer>
            <p>&copy; 2025 Orçun Gökoluk.</p>
        </footer>

    </>
  )
}

export default MainLayout
