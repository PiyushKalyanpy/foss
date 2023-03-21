import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel/Carousel'


function CoDev() {
  return (
    <div>
        
        <Navbar />
        
        <div className='max-w-lg' >
        <div className='absolute top-24 left-10 z-10 text-2xl'>Upcoming...</div>
            <Carousel />
        </div>
    </div>
  )
}

export default CoDev