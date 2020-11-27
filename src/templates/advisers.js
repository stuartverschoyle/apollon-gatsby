import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Advisers from '../components/Advisers'
                         
export const AdvisersPageTemplate = ({
  title,
  image,
  advisers,
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations">INVESTOR RELATIONS &gt;</Link><Link to="/investor-relations/advisers">ADVISERS</Link>
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
            <div className="column is-6 is-offset-3">
              <Advisers gridItems={advisers.item} />
            </div>
          </div>
        </div>
      </div>
    </section>
 
   
  </div>
)

AdvisersPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  advisers: PropTypes.shape({
    item: PropTypes.array,
  }),
 
}

const AdvisersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AdvisersPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        advisers={frontmatter.advisers}
      />
    </Layout>
  )
}

AdvisersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AdvisersPage

export const pageQuery = graphql`
  query AdvisersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "advisers" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        advisers {
          item {
            header
            text
            description
          }
        }                              
      }
    }
  }
`
