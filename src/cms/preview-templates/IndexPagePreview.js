import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        intro={data.intro || { blurbs: [] }}
        featuretitle={data.featuretitle}
        mainpitch={toHTML(data.mainpitch.title) || toHTML(data.mainpitch.description) || toHTML(data.mainpitch.subtitle) || toHTML(data.mainpitch.subdescription)}
        main={data.main || {}}
        carousel={data.carousel || { slides: [] }}
        products={data.products || { slides: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
