import React from 'react'
import PropTypes from 'prop-types'
import { PresentationsandReportsPageTemplate } from '../../templates/presentations-and-reports'

const PresentationsandReportsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PresentationsandReportsPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        presentations={data.presentations || { downloads: [] } }
        reports={data.reports || { downloads: [] } }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PresentationsandReportsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PresentationsandReportsPagePreview
