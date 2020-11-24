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
                             
export const MedicallySupervisedTrialsPageTemplate = ({
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
        <Link to="/">HOME &gt;</Link><Link to="/operations/docs-place-international">OPERATIONS &gt;</Link><Link to="/operations/medically-supervised-trials">MEDICALLY SUPERVISED TRIALS</Link>
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
                  <div className="column is-6 is-offset-1">
                    <div className="tile">
                      <div
                        dangerouslySetInnerHTML={{ __html: toHTML(mainpitch.description)}}
                      />
                    </div>
                    <h4 style={{textAlign:"center", marginTop:"40px"}}>APOLLON HAS WORKED WITH SEVERAL PATIENTS ON SUCCESSFUL CLINICAL TRIALS RESULTING IN 7 FORMULATIONS TO DATE</h4>
                    <div className="image-table">
                      <img style={{width: "107px", height:"107px"}} src="/img/operations/logos_the_university-of-the-west-indies@2x.jpg" alt="University of the West Indies" />
                      <img style={{width: "110px", height:"74px"}} src="/img/operations/logos_docs-place@2x.jpg" alt="Docs Place" />
                      <img style={{width: "168px", height:"57px"}} src="/img/operations/logos_ministry-of-health_and_wellness@2x.jpg" alt="Ministry of Health &amp; Wellness" />
                    </div>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <img src="/img/operations/doctor_notes@2x.jpg" style={{width: '530px', height:"auto"}} alt="" />
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

MedicallySupervisedTrialsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object, 
}

const DocsPlaceInternationalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MedicallySupervisedTrialsPageTemplate
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
  query MedicallySupervisedTrialsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "medically-supervised-trials" } }) {
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
      }
    }
  }
`
