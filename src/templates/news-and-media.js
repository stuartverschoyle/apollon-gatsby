import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import News from '../components/News'
import VideoGrid from '../components/Videogrid'

export const NewsAndMediaPageTemplate = ({
  title,
  image,
  news,
  video,
  mainpitch,
  isOpen,
  setOpen,
  videoId,
  setVideoId
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
        <Link to="/">HOME &gt;</Link><Link to="/investor-relations">INVESTOR RELATIONS &gt;</Link><Link to="/investor-relations/news-and-media">NEWS &amp; MEDIA</Link>
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
            <div className="column is-6 is-offset-3 news">
              <h1 style={{color:"#000"}} className="title is-size-3-mobile is-size-2-tablet is-size-2-widescreen">News</h1>
              <News gridItems={news.item} />
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section className="section section--gradient highlights">
      <div className="container">                        
        <div className="content">       
          <div className="content columns">
            <div className="column is-8 is-offset-2 news">
              <h1 className="title is-size-3-mobile is-size-3-tablet is-size-3-widescreen">{mainpitch.title}</h1>
              <iframe title="Apollon video" src={`https://player.vimeo.com/video/${mainpitch.vimeoid}`} style={{width: '100%',height:'410px',marginBottom:"20px"}} frameBorder="0" allow="autoplay; fullscreen"></iframe>
              <p style={{marginBottom:"40px"}}>{mainpitch.date}<br /><span style={{fontFamily:"hk_groteskbold"}}>{mainpitch.vimeotitle}</span></p>
              <VideoGrid 
              gridItems={video.item} 
              isOpen={isOpen}
              setOpen={setOpen}
              videoId={videoId}
              setVideoId={setVideoId}
              />
            </div>
          </div>
        </div>
      </div>
    </section>      

  </div>
)

NewsAndMediaPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object, 
  news: PropTypes.shape({
    item: PropTypes.array,
  }),
  video: PropTypes.shape({
    item: PropTypes.array,
  }),
  isOpen: PropTypes.string,
  setOpen: PropTypes.string,  
}

const NewsAndMediaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')

  return (
    <Layout>
      <NewsAndMediaPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        video={frontmatter.video}
        news={frontmatter.news}
        mainpitch={frontmatter.mainpitch}
        isOpen={isOpen}
        setOpen={setOpen}
        videoId={videoId}
        setVideoId={setVideoId}        
      />
    </Layout>
  )
}

NewsAndMediaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsAndMediaPage

export const pageQuery = graphql`
  query NewsAndMediaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "news-and-media" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        news {
          item {
            date
            text
            url
          }
        }     
        mainpitch {
          vimeoid
          date 
          title
          vimeotitle
        }
        video {
          item {
            id
            image
            date
            title
          }
        }                              
      }
    }
  }
`
