import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Slider from "react-slick"
import './../templates/slick/slick.css'
import './../templates/slick/slick-theme.css'

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 4.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]  
}

const FeatureGrid = ({ gridItems }) => (
  <Slider {...settings} className="overflow-hidden carousel product-carousel">
    {gridItems.map((item, key) => (
      <div key={key}>
      <PreviewCompatibleImage imageInfo={item} />
      <p><span>{item.alt}</span></p>
      <p>{item.description}</p>
      </div>

    ))}
  </Slider> 
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
    })
  ),
}

export default FeatureGrid
