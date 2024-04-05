import React from 'react'
import Front from './component/Front'
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import ProfilePage from './pages/ProfilePage'
import Login from './pages/Login'

function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      
  
    </div>
  )
}

export default App