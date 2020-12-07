import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import remark from 'remark'
import remarkHTML from 'remark-html'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                            
  const FeatureGrid = ({ gridItems, readMoreAdvisory, toggleMore }) => (
    <div className="columns is-multiline">
    {gridItems.map((item, i) => (
      <div key={i} className="column is-3 space-between">
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
          {readMoreAdvisory[i] ? null : <div className="intro module overflow" dangerouslySetInnerHTML={{ __html: toHTML(item.description)}}/>}
          <SlideDown className={'my-dropdown-slidedown'}>{readMoreAdvisory[i] ? <div className="animated-item" dangerouslySetInnerHTML={{ __html: toHTML(item.description)}}/>: null}</SlideDown>
        </section>
        <button className="btn btnInvert" onClick={()=> [toggleMore(i)]}>{readMoreAdvisory[i] ?'READ LESS':'READ MORE' }</button>                                                                                   
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
      readMoreAdvisory: PropTypes.string,
    })
  ),
}

export default FeatureGrid
