import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import PdfReports from '../components/PdfReports'
                         
export const PresentationsandReportsPageTemplate = ({
  title,
  image,
  presentations,
  reports
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations">INVESTOR RELATIONS &gt;</Link><Link to="/investor-relations/presentations-and-reports">PRESENTATION &amp; REPORTS</Link>
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
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen is-offset-1">Presentations</h1>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">
          <div className="content columns">
            <div className="column is-12">
              <PdfReports gridItems={presentations.downloads} />
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">
          <div className="content columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen is-offset-1">Reports</h1>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">
          <div className="content columns">
            <div className="column is-12">
              <PdfReports gridItems={reports.downloads} />
            </div>
          </div>
        </div>
      </div>
    </section>            
   
  </div>
)

PresentationsandReportsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  featuretitle: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  presentations: PropTypes.shape({
    downloads: PropTypes.array,
  }),
  reports: PropTypes.shape({
    downloads: PropTypes.array,
  }),    
}

const PresentationsandReportsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PresentationsandReportsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        featuretitle = {frontmatter.featuretitle}
        intro={frontmatter.intro}
        presentations={frontmatter.presentations}
        reports={frontmatter.reports}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

PresentationsandReportsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PresentationsandReportsPage

export const pageQuery = graphql`
  query PresentationsandReportsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "presentations-and-reports" } }) {
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
        presentations {
          downloads {
            name
            text
            url
          }
        }
        reports {
          downloads {
            name
            text
            url
          }
        }                                              
      }
    }
  }
`
