import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Productcarousel from '../components/ProductCarousel'

import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
                            .use(remarkHTML)
                            .processSync(value)
                            .toString()
                             
export const TradeMarkedProductsPageTemplate = ({
  title,
  image,
  main, 
  products, 
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
        <Link to="/">HOME &gt;</Link><Link to="/products/trademarked-products">PRODUCTS &gt;</Link><Link to="/products/trademarked-products">TRADEMARKED PRODUCTS</Link>
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
                <div className="content withlist columns">
                  <div className="column is-8 is-offset-2">
                    <div
                      dangerouslySetInnerHTML={{ __html: toHTML(main.description)}}/>                                          
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
        <div className="column is-10 is-offset-2">
        <Productcarousel gridItems={products.slides} />             
        </div>                
      </div> 
    </section>    
 
  </div>
)

TradeMarkedProductsPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  main: PropTypes.object,
  products: PropTypes.shape({
    slides: PropTypes.array,
  }),  
}

const TradeMarkedProductsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TradeMarkedProductsPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        main={frontmatter.main}
        products={frontmatter.products}
      />
    </Layout>
  )
}

TradeMarkedProductsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TradeMarkedProductsPage

export const pageQuery = graphql`
  query TradeMarkedProductsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "trademarked-products" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          heading
          description                                                                                                 
        }
        products {
          slides {
            image {
              childImageSharp {
                fluid(maxWidth: 356, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
            description
          }
        }                     
      }
    }
  }
`
