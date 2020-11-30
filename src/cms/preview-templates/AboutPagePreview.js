import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AboutPageTemplate
        title={data.title}
        heading={data.heading}
        featuretitle={data.featuretitle}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch.title || data.mainpitch.description || data.mainpitch.image || data.mainpitch.subtitle || data.mainpitch.subdescription}
        carousel={data.carousel || { slides: [] }}
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

