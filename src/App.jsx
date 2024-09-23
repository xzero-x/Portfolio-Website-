import { BrowserRouter } from "react-router-dom"

import { About, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative">
        <Navbar />
        <Hero />
        <StarsCanvas /> 
      </div>
      <About />
      <Tech />
      <Experience />
      <Works />
    </BrowserRouter>
        
    
  )
}

export default App
