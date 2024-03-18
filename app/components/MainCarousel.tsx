import React from 'react'
import RevolvingCarousel from './RevolvingCarousel'
import CarouselHighlights from './CarouselHighlights'

const MainCarousel = () => {
  return (
    <div className="row featured-1 mb-5">
    <RevolvingCarousel/>
    <CarouselHighlights/>
    </div>
  )
}

export default MainCarousel
