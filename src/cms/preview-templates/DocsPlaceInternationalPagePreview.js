import React from 'react'
import PropTypes from 'prop-types'
import { DocsPlacePageTemplate } from '../../templates/docs-place-international'

const DocsPlacePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <DocsPlacePageTemplate
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

DocsPlacePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default DocsPlacePreview
