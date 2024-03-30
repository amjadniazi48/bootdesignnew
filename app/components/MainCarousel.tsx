import React from 'react'
import RevolvingCarousel from './RevolvingCarousel'
import StaticCarousel from './StaticCarousel'

const MainCarousel = () => {
  return (
    <div className="row featured-1 mb-5">
    <RevolvingCarousel/>
    <StaticCarousel/>
    </div>
  )
}

export default MainCarousel
