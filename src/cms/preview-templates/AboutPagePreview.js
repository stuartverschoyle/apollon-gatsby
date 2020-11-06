import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        intro={data.intro || { blurbs: [] }}
        featuretitle={data.featuretitle}
        mainpitch={data.mainpitch.title || data.mainpitch.description || data.mainpitch.subtitle || data.mainpitch.subdescription}
        main={data.main || {}}
        carousel={data.carousel || { slides: [] }}
        products={data.products || { slides: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview

