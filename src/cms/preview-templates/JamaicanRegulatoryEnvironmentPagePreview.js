import React from 'react'
import PropTypes from 'prop-types'
import { JamaicanRegulatoryEnvironmentPageTemplate } from '../../templates/jamaican-regulatory-environment'

const JamaicanRegulatoryEnvironmentPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <JamaicanRegulatoryEnvironmentPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

JamaicanRegulatoryEnvironmentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default JamaicanRegulatoryEnvironmentPagePreview
