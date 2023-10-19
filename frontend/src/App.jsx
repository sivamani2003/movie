import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Admin from './Components/Admin/Admin'
import Movie from './Components/movies/Movie.jsx'
import Auth from './Components/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, userActions } from './store/main'
import Booking from './Components/Bookings/Booking'
import Userprofile from './profile/profile'
function App() {
  const dispatch = useDispatch()
  const isAdminloggedin = useSelector((state)=>state.admin.isloggedin)
  const isUserloggedin = useSelector((state)=>state.user.isloggedin)
  console.log("isAdminloggedin",isAdminloggedin)
  console.log("isuserloggedin",isUserloggedin)
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login())
    } else if (localStorage.getItem("adminId")){
      dispatch(adminActions.login())
    }
  }, []); 
  return <div>
    <Header/>
    <section>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/movies' element={<Movie/>}/>
        <Route path='/admin' element={<Admin/>}/> 
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/user' element={<Userprofile/>}/>
        <Route path='/booking/:id' element={<Booking/>}/>
      </Routes>
    </section>
  </div>
}

export default App
