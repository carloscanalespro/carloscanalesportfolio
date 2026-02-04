import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Resume from './components/Resume.jsx'
import Hardskills from './components/Hardskills.jsx'
import Softskills from './components/Softskills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <div id='rat'>
          <Resume/>

          <div className='skills'>
            <Hardskills/>
            <Softskills/>
          </div>

          <Experience/>
          <Projects/>
          <Footer/>
        </div>
      
    
    </>
  )
}

export default App
