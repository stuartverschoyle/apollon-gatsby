import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
                        
export const UnderstandingCannabisPageTemplate = ({
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
        <Link to="/">HOME &gt;</Link><Link to="/about">ABOUT &gt;</Link><Link to="/about/understanding-cannabis">UNDERSTANDING CANNIBS</Link>
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
                  <div className="column is-10 is-offset-1">
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.title}</h1>
                    <img src="/img/history-of-cannabis.svg" style={{width: '100%', height:"auto"}} alt="" />
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.subtitle}</h1>
                    <img src="/img/cancer-graph.svg" style={{width: '100%', height:"auto"}} alt="" />
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

UnderstandingCannabisPageTemplate.propTypes = {
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
      <UnderstandingCannabisPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
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
  query UnderstandingCannabisPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "understanding-cannabis" } }) {
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
      }
    }
  }
`
