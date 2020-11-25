import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Pdf from '../components/Pdf'
                         
export const InvestorRelationsPageTemplate = ({
  title,
  image,
  featuretitle,
  intro,
  pdf
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations/investor-relations">INVESTOR RELATIONS</Link>
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
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen is-offset-1">{featuretitle}</h1>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>
    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">
          <div className="content columns">
            <div className="column is-8 is-offset-2">
              <Pdf gridItems={pdf.downloads} />
            </div>
          </div>
        </div>
      </div>
    </section>    
   
  </div>
)

InvestorRelationsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  featuretitle: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  pdf: PropTypes.shape({
    downloads: PropTypes.array,
  }),  
}

const InvestorRelationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <InvestorRelationsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        featuretitle = {frontmatter.featuretitle}
        intro={frontmatter.intro}
        pdf={frontmatter.pdf}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

InvestorRelationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default InvestorRelationsPage

export const pageQuery = graphql`
  query InvestorRelationsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "investor-relations" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
