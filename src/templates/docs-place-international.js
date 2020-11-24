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
                             
export const DocsPlacePageTemplate = ({
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
        <Link to="/">HOME &gt;</Link><Link to="/operations/docs-place-international">OPERATIONS &gt;</Link><Link to="/operations/docs-place-international">DOC'S PLACE INTERNATIONAL</Link>
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
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="content columns">
                  <div className="column is-6 is-offset-3">
                    <img src="/img/map-jamaica.svg" style={{width: '100%', height:"auto"}} alt="" />
                  </div>
                </div>
              </div> 
              <div className="content">
                <div className="content columns">
                  <div className="column is-8 is-offset-2">
                    <div className="tile">
                      <div
                        className="list-icon"
                        dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.list)}}
                      />
                    </div>
                    <button className="btn btnInvert" style={{width: "240px", display:"block", margin:"20px auto"}}>Find Out More</button>
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

DocsPlacePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object, 
}

const DocsPlaceInternationalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <DocsPlacePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

DocsPlaceInternationalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default DocsPlaceInternationalPage

export const pageQuery = graphql`
  query DocsPlacePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "docs-place-international" } }) {
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
          list                   
        }
        heading                      
      }
    }
  }
`
