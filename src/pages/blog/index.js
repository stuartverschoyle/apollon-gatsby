import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Link } from 'gatsby'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
    <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/investor-relations/regulatory-news_hero-image@2x.jpg')`,
        backgroundPosition: `center top`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          maxWidth: '1110px',
          margin: '0 auto',
          width: 'inherit'
        }}
      >
        <div className="breadcrumb">
        <Link to="/">HOME &gt;</Link><Link to="/blog">BLOG</Link>
        </div>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white'
          }}
        >
          Latest Stories
        </h1>
      </div>
    </div>
        <section className="section">
          <div className="container over-hero blog-article">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        </div>
      </Layout>
    )
  }
}
