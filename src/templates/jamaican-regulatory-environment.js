import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'

import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                             
export const JamaicanRegulatoryEnvironmentPageTemplate = ({
  title,
  image,
  mainpitch,
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
          <Link to="/">HOME &gt;</Link><Link to="/regulation/apollon-licences">REGULATION &gt;</Link><Link to="/regulation/jamaican-regulatory-environment">JAMAICAN REGULATORY ENVIRONMENT</Link>
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
    <section className="section section--gradient">
      <div className="container over-hero">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
            <div className="content">
                <div className="content columns">
                  <div className="column is-8 is-offset-2">
                    <div className="tile">
                      <div
                        dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}}
                      />                    
                    </div>
                    <div>
                      <div style={{marginLeft: "20px"}}
                          dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.list)}}
                        />                        
                    </div>
                    {/* <div>
                      <button className="btn btnInvert" style={{width: "178px", marginTop:"20px"}}>Learn More</button>
                    </div>                     */}
                  </div>               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </div>
)

JamaicanRegulatoryEnvironmentPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object, 
}

const JamaicanRegulatoryEnvironmentPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <JamaicanRegulatoryEnvironmentPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

JamaicanRegulatoryEnvironmentPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default JamaicanRegulatoryEnvironmentPage

export const pageQuery = graphql`
  query JamaicanRegulatoryEnvironmentPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "jamaican-regulatory-environment" } }) {
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
          description
          list
        }
        heading                      
      }
    }
  }
`
