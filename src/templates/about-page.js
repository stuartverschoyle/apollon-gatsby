import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Carousel from '../components/Carousel'

import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                             
export const AboutPageTemplate = ({
  title,
  image,
  mainpitch,
  heading, 
  featuretitle,
  intro,
  main, 
  carousel, 
  products, 

}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `left top`,
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
        <Link to="/">HOME ></Link><Link to="/about">ABOUT ></Link><Link to="/about">ABOUT US</Link>
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
                    <img src="/img/about-graph.svg" style={{width: '100%', height:"458px"}} alt="" />
                    <iframe title="Apollon video" src="https://player.vimeo.com/video/327193904" style={{width: '100%', height:"458px"}} frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  featuretitle: PropTypes.string,
  carousel: PropTypes.shape({
    slides: PropTypes.array,
  })  
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        featuretitle = {frontmatter.featuretitle}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
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
