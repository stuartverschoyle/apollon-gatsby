import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                            
const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column no-padding is-4 space-between">
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
          <h3 style={{fontSize:'20px', textTransform:'uppercase', marginTop:'10px', fontFamily:"hk_groteskbold"}}>{item.header}</h3>
          <p style={{fontSize:'16px', color:"#545454", fontFamily:"hk_groteskbold"}}>{item.text}</p>
          <div dangerouslySetInnerHTML={{ __html: toHTML(item.description)}}/> 
        </section>
        <button className="btn btnInvert">READ MORE</button>                                                                                   
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
