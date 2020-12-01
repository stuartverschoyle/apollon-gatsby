import React from 'react'
import PropTypes from 'prop-types'
import { ShareHolderInformationPageTemplate } from '../../templates/shareholder-information'

const ShareHolderPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ShareHolderInformationPageTemplate
        heading={data.heading}
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
        carousel={data.carousel || { slides: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ShareHolderPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ShareHolderPagePreview
