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

    </>
  )
}

export default MainLayout
