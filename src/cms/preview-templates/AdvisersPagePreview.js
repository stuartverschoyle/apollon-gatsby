import React from 'react'
import PropTypes from 'prop-types'
import { AdvisersPageTemplate } from '../../templates/advisers'

const AdvisersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <AdvisersPageTemplate
      title={data.title}
      image={getAsset(data.image)}
      advisers={data.advisers || { item: [] } }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AdvisersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AdvisersPagePreview
