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
                             
export const ArtificialIntelligencePageTemplate = ({
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
        <Link to="/">HOME &gt;</Link><Link to="/operations/docs-place-international">OPERATIONS &gt;</Link><Link to="/operations/artificial-intelligence">ARTIFICIAL INTELLIGENCE</Link>
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
                    <h2 style={{textAlign:"center", color:"#78C67D", fontSize:"24px", marginBottom:"40px"}}>{mainpitch.title}</h2>
                    <div className="tile">
                      <div
                        dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content columns">
                  <div className="column is-6 is-offset-3">
                    <img src={!!mainpitch.image.childImageSharp ? mainpitch.image.childImageSharp.fluid.src : mainpitch.image} alt="" />
                  </div>
                </div>
              </div> 
              <div className="content">
                <div className="content columns">
                  <div className="column is-8 is-offset-2">
                    <p>{mainpitch.footnote}</p>
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

ArtificialIntelligencePageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object, 
}

const ArtificialIntelligencePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ArtificialIntelligencePageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

ArtificialIntelligencePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArtificialIntelligencePage

export const pageQuery = graphql`
  query ArtificialIntelligencePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "artificial-intelligence" } }) {
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
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }          
          footnote
        }
      }
    }
  }
`
