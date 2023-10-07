import React from 'react'
import './App.css'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Admin from './Components/Admin/Admin'
import Movie from './Components/movies/Movie.jsx'
import Auth from './Components/Auth/Auth'
import { useSelector } from 'react-redux'
function App() {
  const isAdminloggedin = useSelector((state)=>state.admin.isloggedin)
  const isUserloggedin = useSelector((state)=>state.user.isloggedin)
  console.log("isAdminloggedin",isAdminloggedin)
  console.log("isuserloggedin",isUserloggedin)
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
