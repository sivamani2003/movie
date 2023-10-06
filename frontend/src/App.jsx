import React from 'react'
import './App.css'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Admin from './Components/Admin/Admin'
import Movie from './Components/movies/Movie.jsx'
import Auth from './Components/Auth/Auth'
function App() {

  return <div>
    <Header/>
    <section>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/admin' element={<Admin/>}/> 
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </section>
  </div>
}

export default App
