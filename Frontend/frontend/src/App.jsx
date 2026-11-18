import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Contact from './user/pages/Contact'
import Books from './user/pages/Books'
import Auth from './pages/Auth'
import Profile from './user/pages/Profile'
import View from './user/pages/View'
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminSettings from './admin/pages/AdminSettings'
import AdminResource from './admin/pages/AdminResource'
import Preloader from './components/Preloader'


function App() {
  const [count, setCount] = useState(0)
  const [isLoading,setLoading] = useState(true)
  setTimeout(()=>{
    setLoading(false)
  },3000)

  return (
    <>
      <Routes>
        <Route path='/' element={isLoading ? <Preloader /> :<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Books' element={<Books />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth />} />


        <Route path='/Profile/:id' element={<Profile />} />
        <Route path='/books/:id' element={<View />} />

        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/resources' element={<AdminResource />} />
        <Route path='/admin/settings' element={<AdminSettings />} />


      </Routes>
    </>
  )
}

export default App
