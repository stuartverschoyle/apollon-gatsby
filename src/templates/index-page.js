import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                             
export const IndexPageTemplate = ({
  title,
  heading, 
  image,
  mainpitch,
  carousel, 
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`,
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
        }}
      >
        <h2 style={{
            color: 'white',
            marginBottom: '10px'
          }}>{heading}</h2>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white'
          }}
        >
          {title}
        </h1>
        <Link style={{
          width:'200px',
          marginTop: '30px'
        }} className="btn" to="/about">
          Learn more
        </Link>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container over-hero">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <div className="content columns">
                  <div className="column is-3 is-offset-1">
                    <div className="tile">
                      <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.title}</h1>
                    </div>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <div className="tile">
                      <div
                        dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}}
                      />                 
                    </div>
                    <Link style={{
                      width:'322px',
                      marginTop: '30px'
                    }} className="btn btnInvert" to="/about">
                      Learn more about Apollon
                  </Link>                     
                  </div>
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
                <div className="column is-3 is-offset-1">
                  <div className="tile">
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.subtitle}</h1>
                  </div>
                </div>
                <div className="column is-6 is-offset-1">
                  <div className="tile">
                    <div
                      dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.subdescription)}}
                    />                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
    <section className="section section--gradient" style={{marginBottom:'70px'}}>
      <div className="columns">
        <div className="column is-12 ">  
        <Carousel gridItems={carousel.slides} />
        </div>                
      </div> 
    </section>

  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mainpitch: PropTypes.object,
  carousel: PropTypes.shape({
    slides: PropTypes.array,
  }),   
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
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
        carousel {
          slides {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }                      
      }
    }
  }
`
