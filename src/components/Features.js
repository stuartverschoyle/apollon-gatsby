import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                maxWidth: '365px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} /> 
            </div>
          </div>
          <h3 style={{fontSize:'20px', textTransform:'uppercase', marginTop:'10px'}}>{item.header}</h3>
          <p style={{fontSize:'20px'}}>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      header: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
