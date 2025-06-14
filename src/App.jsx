import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Main from './page/Main'
import Navbars from './component/molecul/Navbars'
import Project from './page/Project'
import Footers from './component/molecul/Footers'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion";


function App() {
  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };
  
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  const location = useLocation();

  return (
    <div className='w-full bg-black text-white'>
      <Navbars/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={ <motion.div {...pageTransition} transition={{ duration: 0.5 }}><Main/></motion.div> }/>
          <Route path='/All-Project' element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Project/></motion.div>}/>
        </Routes>
      </AnimatePresence>
      <Footers/>
    </div>
  )
}

export default App
