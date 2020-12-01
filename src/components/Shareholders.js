import React from 'react'
import PropTypes from 'prop-types'
                            
const FeatureGrid = ({ gridItems }) => (
    gridItems.map((item) => (
      <tr key={item.shareholder}>
        <td>{item.shareholder}</td>
        <td>{item.numberofshares}</td>
        <td>{item.percentageofshares}</td>
     </tr>
    ))
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      shareholder: PropTypes.string,
      numberofshares: PropTypes.string,
      percentageofshares: PropTypes.string,
    })
  ),
}

export default FeatureGrid
