import React from 'react'
import PropTypes from 'prop-types'
import { CultivationPageTemplate } from '../../templates/cultivation-processing-and-extraction'

const CultivationPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <CultivationPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CultivationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CultivationPagePreview
