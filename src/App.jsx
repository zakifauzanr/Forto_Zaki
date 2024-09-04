import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './page/Main'
import Navbars from './component/molecul/Navbars'
import Project from './page/Project'
import Footers from './Footers'

function App() {

  return (
    <div className='w-full bg-black text-white'>
      <Navbars/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/All-Project' element={<Project/>}/>
      </Routes>
      <Footers/>
    </div>
  )
}

export default App
