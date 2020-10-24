import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Slider from "react-slick"
import "./slick/slick.css"
import "./slick/slick-theme.css"

import remark from 'remark'
import remarkHTML from 'remark-html'



const settings = {
  arrows: true,
  dots: true,
  infinite: false,
  autoplay: false,
  slidesToShow: 1.5,
  slidesToScroll: 1 ,
}

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                             
export const IndexPageTemplate = ({
  image,
  title,
  heading, 
  main, 
  carousel, 
  mainpitch,
  featuretitle,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
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
          margin: '0 auto'
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
        }} className="btn" to="/blog">
          Learn more
        </Link>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container over-hero">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content columns">
                  <div className="column is-6">
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
        <Slider {...settings} className="overflow-hidden carousel">
          <div className="has-padding-right-twenty">
            <PreviewCompatibleImage imageInfo={carousel.image1} />
            <p><span>1 / </span>{carousel.image1.alt}</p>
          </div>
          <div className="has-padding-right-twenty">
          <PreviewCompatibleImage imageInfo={carousel.image2} />
            <p><span>2 / </span>{carousel.image2.alt}</p>
          </div>
          <div className="has-padding-right-twenty">
          <PreviewCompatibleImage imageInfo={carousel.image3} />
            <p><span>3 / </span>{carousel.image3.alt}</p>
          </div> 
          <div className="has-padding-right-twenty">
          <PreviewCompatibleImage imageInfo={carousel.image4} />
            <p><span>4 / </span>{carousel.image4.alt}</p>
          </div> 
          <div className="has-padding-right-twenty">
          <PreviewCompatibleImage imageInfo={carousel.image5} />
            <p><span>5 / </span>{carousel.image5.alt}</p>
          </div> 
          <div className="has-padding-right-twenty">
          <PreviewCompatibleImage imageInfo={carousel.image6} />
            <p><span>6 / </span>{carousel.image6.alt}</p>
          </div>                                                                                        
        </Slider>                    
        </div>                
      </div> 
    </section>

    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">
          <div className="has-text-centered">
              <h1 class="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{featuretitle}</h1>
          </div>                              
          <Features gridItems={intro.blurbs} />
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container column">                        
        <div className="content">    
          <div className="columns">
            <div className="column is-6">
              <div className="tile">
                <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{main.heading}</h1>
              </div>
            </div> 
            <div className="column is-6 productlist">
            <div
                  dangerouslySetInnerHTML={{ __html: toHTML(main.description)}}/>                                          
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">                        
        <div className="content">     
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical" style={{flexGrow: 2.3}}>
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </article>                    
                </div>
                <div className="tile is-parent is-vertical" style={{flexGrow: 1.08}}>
                  <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                  <PreviewCompatibleImage imageInfo={main.image3} />
                  </article>
                </div>
                <div className="tile is-parent is-vertical" style={{flexGrow: 0.895}}>
                  <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image4} />
                  <PreviewCompatibleImage imageInfo={main.image5} />
                  <PreviewCompatibleImage imageInfo={main.image6} />
                  </article>                                                
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  featuretitle: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        featuretitle = {frontmatter.featuretitle}
        intro={frontmatter.intro}
        main={frontmatter.main}
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
        }
        heading
        description
        featuretitle
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
        carousel {
          image1 {
            alt
            image { 
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }
          image5 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }
          image6 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 733, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }              
            }
          }                                               
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image5 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image6 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }                                                                                                  
        }        
      }
    }
  }
`
