import React from 'react'
import PropTypes from 'prop-types'
import { MedicallySupervisedTrialsPageTemplate } from '../../templates/medically-supervised-trials'

const MedicallySupervisedTrialsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MedicallySupervisedTrialsPageTemplate
        heading={data.heading}
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MedicallySupervisedTrialsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MedicallySupervisedTrialsPagePreview
