import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Post from './components/Post'
import Profile from './components/Profile'
import Logout from './components/Logout'
import LoginUser from './components/LoginUser'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [AuthKey, setAuthKey] = useState("")

  return (
    <div>
      <Link to={''}/>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='' element={<Login AuthKey={AuthKey} setAuthKey={setAuthKey} />}/>
        <Route path='/Post' element={<Post AuthKey={AuthKey} setAuthKey={setAuthKey}/>}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Logout' element={<Logout />}/>
        <Route path='/LoginUser' element={<LoginUser AuthKey={AuthKey} setAuthKey={setAuthKey} />}/>
      </Routes>
    </div>
  )
}

export default App
