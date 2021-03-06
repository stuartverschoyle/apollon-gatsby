import React from 'react'
import PropTypes from 'prop-types'
import { OurTeamPageTemplate } from '../../templates/our-team'

const OurTeamPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <OurTeamPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        mainpitch={data.mainpitch || {}}
        intro={data.intro || { blurbs: [] } || { advisory: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

OurTeamPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurTeamPreview

