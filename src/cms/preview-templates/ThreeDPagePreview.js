import React from 'react'
import PropTypes from 'prop-types'
import { ThreeDPageTemplate } from '../../templates/3d-printer'

const ThreeDPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ThreeDPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ThreeDPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ThreeDPreview
