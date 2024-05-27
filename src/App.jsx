import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './page/Main'
import Navbars from './component/molecul/Navbars'
import Project from './page/Project'

function App() {

  return (
    <div className='w-full bg-black text-white'>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/All-Project' element={<Project/>}/>
      </Routes>
    </div>
  )
}

export default App
