import React from 'react'
import PropTypes from 'prop-types'
import { ApollonLicencesPageTemplate } from '../../templates/apollon-licences'

const ApollonLicencesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ApollonLicencesPageTemplate
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

ApollonLicencesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ApollonLicencesPagePreview
