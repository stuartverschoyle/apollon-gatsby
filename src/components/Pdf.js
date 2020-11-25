import React from 'react'
import PropTypes from 'prop-types'
                            
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-12 green-border pdf-container">
        <div className="content columns">
          <div className="column is-6" style={{textAlign: "center"}}><img src="/img/pdf_icon.svg" alt="" /></div>
          <div className="column is-6">
            <section className="section">
              <h3 style={{fontSize:'16px', fontFamily: "hk_groteskbold", textTransform:'uppercase', color:"#78C67D",marginTop:'10px', marginBottom:'5px'}}>{item.name}</h3>
              <p style={{fontSize:'16px', fontFamily: "hk_groteskbold"}}>Last Updated:{item.updated}<br />
              <span style={{fontSize:'16px', fontFamily: "hk_groteskregular"}}>{item.text}</span></p>
              <a href={item.url} rel="noreferrer" style={{width:'262px'}} className="btn btnInvert" target="_blank">DOWNLOAD</a>
            </section>        
          </div>
        </div>        
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
