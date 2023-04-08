
import React from 'react'
import Nav from './Components/HeroNav/Nav'
import Hero from './Components/HeroNav/Hero'
import Ticket from './Components/Ticket'

import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Ticket/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App
