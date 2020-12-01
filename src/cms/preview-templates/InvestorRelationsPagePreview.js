import React from 'react'
import PropTypes from 'prop-types'
import { InvestorRelationsPageTemplate } from '../../templates/investor-relations'

const InvestorRelationsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <InvestorRelationsPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        intro={data.intro || { blurbs: [] }}
        pdf={data.pdf || { downloads: [] }}
        featuretitle={data.featuretitle}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

InvestorRelationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InvestorRelationsPagePreview
