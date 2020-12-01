import React from 'react'
import PropTypes from 'prop-types'
import { ArtificialIntelligencePageTemplate } from '../../templates/artificial-intelligence'

const ArtificialIntelligencePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ArtificialIntelligencePageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ArtificialIntelligencePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ArtificialIntelligencePagePreview
