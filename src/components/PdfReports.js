import React from 'react'
import PropTypes from 'prop-types'
                            
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline" style={{justifyContent:"space-around"}}>
    {gridItems.map((item) => (
      <div style={{maxWidth:"356px", width:"33.33%"}}>
        <div key={item.text} style={{width:"100%"}} className="column is-4 green-border pdf-container">
          <div className="content columns">
            <div className="column is-12" style={{textAlign: "center"}}><img src="/img/pdf_icon.svg" alt="" /></div>
          </div>
          <div className="content columns">
            <div className="column is-12">
              <section className="section" style={{textAlign: "center"}}>
                <h3 style={{fontSize:'16px', fontFamily: "hk_groteskbold", textTransform:'uppercase', color:"#78C67D",marginTop:'10px', marginBottom:'5px'}}>{item.name}</h3>
                <span style={{fontSize:'16px', fontFamily: "hk_groteskregular",color:"#78C67D"}}>{item.text}</span>
              </section>        
            </div>
          </div>        
        </div>
        <a href={item.url} rel="noreferrer" style={{width:'262px',marginTop:"20px"}} className="btn btnInvert" target="_blank">DOWNLOAD</a>
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
