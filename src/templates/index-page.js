import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

                             
export const IndexPageTemplate = ({
  heading, 
  image,
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
          Welcome to Apollon Formularies
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
                  <h1 class="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">Site launch in the coming weeks</h1>

                    <div className="tile">
                      <p>For more information please contact <a href="mailto:info@apollon.org.uk" style={{color:"#6ec489"}}>info@apollon.org.uk</a></p>
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
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
        carousel={frontmatter.carousel}
      />
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
