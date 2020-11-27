import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                            
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <h3 style={{fontSize:'18px', textTransform:'uppercase',color:"#78C67D", marginTop:'10px', marginBottom:'10px'}}>{item.header}</h3>
          <p style={{fontSize:'18px', fontFamily: "hk_groteskbold",marginBottom:'0px'}}>{item.text}</p>
          <div dangerouslySetInnerHTML={{ __html: toHTML(item.description)}}/>                                          
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
