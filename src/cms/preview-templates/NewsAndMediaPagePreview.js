import React from 'react'
import PropTypes from 'prop-types'
import { NewsAndMediaPageTemplate } from '../../templates/news-and-media'

const NewsAndMediaPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <NewsAndMediaPageTemplate
      title={data.title}
      image={getAsset(data.image)}
      news={data.news || { item: [] } }
      mainpitch={data.mainpitch || {}}
      video={data.video || { item: [] } }
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

NewsAndMediaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NewsAndMediaPagePreview
