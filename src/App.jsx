

import { Routes, Route } from 'react-router-dom'
import Searchbar from './components/Searchbar'
import './css/App.css'
import MainLayout from './layouts/MainLayout'
import MovieDetail from './pages/MovieDetail'

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Searchbar/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
          </Route>                    
        </Routes>
    </>
  )
}

export default App
