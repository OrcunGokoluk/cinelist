

import { Routes, Route } from 'react-router-dom'
import Searchbar from './components/Searchbar'
import './css/App.css'
import MainLayout from './layouts/MainLayout'
import MovieDetail from './pages/MovieDetail'
import Overview from './components/detail-page-components/Overview'

function App() {


  return (
    <>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Searchbar/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}>
              <Route index element={<Overview/>}/>
            </Route>
          </Route>                    
        </Routes>
    </>
  )
}

export default App
