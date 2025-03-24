import React from 'react'
import Searchbar from '../components/Searchbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <header className='container'>
            <h1 className='title'>Cine-List</h1>
        </header>
        <Outlet/>
        <footer>
            <p>&copy; 2025 Orçun Gökoluk.</p>
        </footer>

    </>
  )
}

export default MainLayout
