import React from 'react'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Anouncement/>
      <Navbar/>
      <Slider/>
    </div>
  )
}

export default Home