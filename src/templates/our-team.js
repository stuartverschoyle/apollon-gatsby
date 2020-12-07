import React,{useState} from 'react';
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Featuresthree from '../components/Features-three'
import Featuresfour from '../components/Features-four'

import Layout from '../components/Layout'

export const OurTeamPageTemplate = ({
  title,
  image,
  mainpitch,
  intro,
  readMore,
  readMoreAdvisory,
  toggleComment,
  toggleMore
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
        <Link to="/">HOME &gt;</Link><Link to="/about">ABOUT &gt;</Link><Link to="/our-team">OUR TEAM</Link>
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
                  </div>
                </div>
                <Featuresthree gridItems={intro.blurbs} readMore={readMore} toggleComment={toggleComment} />             
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
                <div className="column is-10 is-offset-1">
                  <div className="tile">
                    <h1 className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">{mainpitch.subtitle}</h1>
                  </div>
                </div>
              </div>
              <Featuresfour gridItems={intro.advisory} readMoreAdvisory={readMoreAdvisory} toggleMore={toggleMore}  /> 
            </div>
          </div>
        </div>
      </div>
    </section>     
  </div>
)

OurTeamPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
    advisory: PropTypes.array,
  }),
  readMore:PropTypes.string,
  setReadMore:PropTypes.string,
}

const OurTeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const [readMore,setReadMore] = useState({});
  const [readMoreAdvisory,setreadMoreAdvisory] = useState({});
  const toggleComment = id => {
    setReadMore(prevReadMore => ({
      ...prevReadMore,
      [id]: !prevReadMore[id]
    }));
  };
  const toggleMore = id => {
    setreadMoreAdvisory(prevReadMore => ({
      ...prevReadMore,
      [id]: !prevReadMore[id]
    }));
  };  
  return (
    <Layout>
      <OurTeamPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        readMore={readMore}
        readMoreAdvisory={readMoreAdvisory}
                toggleComment={toggleComment}
        toggleMore={toggleMore}
      />
    </Layout>
  )
}

OurTeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default OurTeamPage

export const pageQuery = graphql`
  query OurTeamPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "our-team" } }) {
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
          subtitle
        }
        intro {
          advisory {
            image {
              childImageSharp {
                fluid(maxWidth: 356, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }            
            header
            text
            description 
          }
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
            description 
          }                    
        }                               
      }
    }
  }
`
