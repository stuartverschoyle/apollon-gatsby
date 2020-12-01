import React from 'react'
import PropTypes from 'prop-types'
import { TradeMarkedProductsPageTemplate } from '../../templates/trademarked-products'

const TradeMarkedProductsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TradeMarkedProductsPageTemplate
        title={data.title}
        image={getAsset(data.image)}
        main={data.main || {}}
        products={data.products || { slides: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

TradeMarkedProductsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TradeMarkedProductsPagePreview
