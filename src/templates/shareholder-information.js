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

export const ShareHolderInformationPageTemplate = ({
  title,
  image,
  mainpitch
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations">INVESTOR RELATIONS &gt;</Link><Link to="/investor-relations/shareholder-information">SHAREHOLDER INFORMATION</Link>
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
    <section className="section section--gradient highlights">
      <div className="container over-hero">                        
        <div className="content">
          <div className="content columns">
            <div className="column is-8 is-offset-2 news">
            <div dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}} /> 
            </div>
          </div>
          <div className="content columns">
            <div className="column is-8 is-offset-2 news">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <th>Shareholders</th>
                  <th>Number of Ordinary Shares</th>
                  <th>% of Ordinary Shares</th>
                </tr>
                <tr>
                  <td>*********</td>
                  <td>163,963,751</td>
                  <td>16.09%</td>
                </tr>
                <tr>
                  <td>*********</td>
                  <td>132,136,364</td>
                  <td>13.62%</td>
                </tr>
                <tr>
                  <td>*********</td>
                  <td>94,6777,778</td>
                  <td>9.76%</td>
                </tr>
                <tr>
                  <td>*********</td>
                  <td>87,743,804</td>
                  <td>9.05%</td>
                </tr>                                          
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>    
  

  </div>
)

ShareHolderInformationPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  featuretitle: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  pdf: PropTypes.shape({
    downloads: PropTypes.array,
  }),  
}

const ShareHolderInformationPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ShareHolderInformationPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        featuretitle = {frontmatter.featuretitle}
        intro={frontmatter.intro}
        pdf={frontmatter.pdf}
        carousel={frontmatter.carousel}
      />
    </Layout>
  )
}

ShareHolderInformationPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ShareHolderInformationPage

export const pageQuery = graphql`
  query ShareHolderInformationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "shareholder-information" } }) {
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
        pdf {
          downloads {
            name
            text
            updated
            url
          }
        }         
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
      }
    }
  }
`
