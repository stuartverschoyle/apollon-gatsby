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
  slidesToShow: 2,
  slidesToScroll: 1 ,
}

const FeatureGrid = ({ gridItems }) => (
  <Slider {...settings} className="overflow-hidden carousel">
    {gridItems.map((item, key) => (
      <div key={key} className="has-padding-right-twenty">
      <PreviewCompatibleImage imageInfo={item} />
      <p><span>{key + 1} / </span>{item.alt}</p>
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
