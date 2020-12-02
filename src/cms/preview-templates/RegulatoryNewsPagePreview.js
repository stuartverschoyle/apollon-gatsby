import React from 'react'
import PropTypes from 'prop-types'
import { RegulatoryNewsPageTemplate } from '../../templates/regulatory-news'

const RegulatoryNewsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <RegulatoryNewsPageTemplate
      title={data.title}
      image={getAsset(data.image)}
      news={data.news || { item: [] } }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

RegulatoryNewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default RegulatoryNewsPagePreview
