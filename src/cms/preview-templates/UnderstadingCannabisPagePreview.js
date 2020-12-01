import React from 'react'
import PropTypes from 'prop-types'
import { UnderstandingCannabisPageTemplate } from '../../templates/understanding-cannabis'

const UnderstandingCannabisPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <UnderstandingCannabisPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

UnderstandingCannabisPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default UnderstandingCannabisPreview

