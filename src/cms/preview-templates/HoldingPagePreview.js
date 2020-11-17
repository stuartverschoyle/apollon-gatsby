import React from 'react'
import PropTypes from 'prop-types'
import { HoldingPageTemplate } from '../../templates/holding-page'

const HoldingPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <HoldingPageTemplate
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

HoldingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HoldingPagePreview
