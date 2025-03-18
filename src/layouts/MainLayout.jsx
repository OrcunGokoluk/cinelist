import React from 'react'
import Searchbar from '../components/Searchbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <div className='container'>
            <header>
                <h1 className='title'>CineList</h1>
            </header>
        </div>
        <Outlet/>
        <footer>
            <p>&copy; 2025 Orçun Gökoluk.</p>
        </footer>

    </>
  )
}

export default MainLayout
