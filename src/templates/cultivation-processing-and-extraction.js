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
                             
export const CultivationPageTemplate = ({
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
          <Link to="/">HOME &gt;</Link><Link to="/products/trademarked-products">PRODUCTS &gt;</Link><Link to="/products/cultivation-processing-and-extraction">CULTIVATION, PROCESSING &amp; EXTRACTION</Link>
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
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <div className="content columns">
                <div className="column is-4 is-offset-1">
                  <div className="tile">
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.title}</h1>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="tile">
                    <div
                      dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}}
                    />                    
                  </div>
                    <div className="image-table">
                      <div className="column is-4"><img src="/img/products/cultivation/01_handshake.svg" alt="Apollon Handshake" /></div>
                      <div className="column is-4"><img src="/img/products/cultivation/02_grow.svg" alt="Apollon Grow" /></div>
                      <div className="column is-4"><img src="/img/products/cultivation/03 weed.svg" alt="Apollon Weed &amp; Wellness" /></div>
                    </div>                  
                    <h5 style={{textAlign:"center", marginTop:"40px"}}>SEED TO HARVEST TIME OF APPROXIMATELY NINE WEEKS</h5>
                    <p>{mainpitch.footernote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <div className="content">
              <div className="content columns">
                <div className="column is-4 is-offset-1">
                  <div className="tile">
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.subtitle}</h1>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="tile" style={{flexDirection:"column"}}>
                    <div style={{marginBottom: "20px"}} dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.subdescription)}} />  
                    <div dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.list)}} />                      
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

CultivationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object, 
}

const CultivationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CultivationPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
      />
    </Layout>
  )
}

CultivationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CultivationPage

export const pageQuery = graphql`
  query CultivationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "cultivation-processing-and-extraction" } }) {
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
          footernote
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          subtitle
          subdescription
          list
        }
        heading                      
      }
    }
  }
`
