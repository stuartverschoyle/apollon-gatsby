import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import News from '../components/News'

export const RegulatoryNewsPageTemplate = ({
  title,
  image,
  news
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations">INVESTOR RELATIONS &gt;</Link><Link to="/investor-relations/regulatory-news">REGULATORY NEWS</Link>
        </div>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white'
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <section className="section section--gradient highlights">
      <div className="container over-hero">                        
        <div className="content">
          <div className="content columns">
          </div>          
          <div className="content columns">
            <div className="column is-6 is-offset-2 news">
              <h1 style={{color:"#000"}} className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{title}</h1>
              <News gridItems={news.item} />
            </div>
          </div>
        </div>
      </div>
    </section>  

  </div>
)

RegulatoryNewsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  featuretitle: PropTypes.string,
  news: PropTypes.shape({
    item: PropTypes.array,
  }),
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  pdf: PropTypes.shape({
    downloads: PropTypes.array,
  }),  
}

const RegulatoryNewsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <RegulatoryNewsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        featuretitle = {frontmatter.featuretitle}
        intro={frontmatter.intro}
        pdf={frontmatter.pdf}
        carousel={frontmatter.carousel}
        news={frontmatter.news}
      />
    </Layout>
  )
}

RegulatoryNewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default RegulatoryNewsPage

export const pageQuery = graphql`
  query RegulatoryNewsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "regulatory-news" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        news {
          item {
            date
            text
            url
          }
        }
        mainpitch {
          title
          description
          subtitle
          subdescription          
        }
        heading
        featuretitle
        pdf {
          downloads {
            name
            text
            updated
            url
          }
        }         
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 356, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            header
            text
          }
        }                              
      }
    }
  }
`
