import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-12" style={{marginTop:"40px"}}>
        <section className="section">
          <p style={{fontSize:'16px', textTransform:'uppercase', fontFamily:"hk_groteskbold" }}>{item.date}</p>
          <p style={{fontSize:'16px'}}>{item.text}</p>
          <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>                                          
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default FeatureGrid
