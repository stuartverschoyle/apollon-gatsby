import React from 'react'
import PropTypes from 'prop-types'
import { AQSERule71Template } from '../../templates/aqse-rule-71'

const AQSERule71PagePreview

= ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AQSERule71Template
        image={getAsset(data.image)}
        title={data.title}
        featuretitle={data.featuretitle}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AQSERule71PagePreview

.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AQSERule71PagePreview


