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
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 1.5,
  slidesToScroll: 1.5  
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
                      <h1 className="title">{mainpitch.title}</h1>
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
                <div className="tile">
                    <h2 className="title">{featuretitle}</h2>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                    <ul>
                      {main.items.map((item) => (
                        <li key={item} className="is-size-5">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <Slider {...settings} className="overflow-hidden">
                      <div>
                        <PreviewCompatibleImage imageInfo={carousel.image1} />
                        <p>{carousel.image1.alt}</p>
                      </div>
                      <div>
                      <PreviewCompatibleImage imageInfo={carousel.image2} />
                        <p>{carousel.image2.alt}</p>
                      </div>
                      <div>
                      <PreviewCompatibleImage imageInfo={carousel.image3} />
                        <p>{carousel.image3.alt}</p>
                      </div> 
                      <div>
                      <PreviewCompatibleImage imageInfo={carousel.image4} />
                        <p>{carousel.image4.alt}</p>
                      </div> 
                      <div>
                      <PreviewCompatibleImage imageInfo={carousel.image5} />
                        <p>{carousel.image5.alt}</p>
                      </div> 
                      <div>
                      <PreviewCompatibleImage imageInfo={carousel.image6} />
                        <p>{carousel.image6.alt}</p>
                      </div>                                                                                        
                  </Slider>                    
                  </div>                
                </div>

                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                    <div className="tile is-parent is-vertical" style={{flexGrow: 3.07}}>
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image1} />
                        </article>                    
                      </div>
                      <div className="tile is-parent is-vertical" style={{flexGrow: 0.9}}>
                        <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={main.image3} />
                        </article>
                        <article className="tile is-child">
                          <PreviewCompatibleImage imageInfo={main.image2} />
                        </article>                                                
                      </div>
                    </div> 
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
                fluid(maxWidth: 240, quality: 64) {
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
          items
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
        }        
      }
    }
  }
`
