import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>     
  <div
  className="full-width-image margin-top-0"
  style={{
    backgroundImage: `url(/img/contact-us_hero-image@2x.jpg)`,
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
    <Link to="/">HOME &gt;</Link><Link to="/contact">THANK YOU</Link>
    </div>
    <h1
      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
      style={{
        color: 'white'
      }}
    >
      Thank you
    </h1>
  </div>
</div>
<section className="section section--gradient highlights">
  <div className="container over-hero">                        
    <div className="content">       
      <div className="content columns">
        <div className="column is-8 is-offset-2 news">
          <div className="column">
            <h1>Thank you for your submission. </h1>
            <p>One of our team will be in contact with you as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  

</Layout>     
)
