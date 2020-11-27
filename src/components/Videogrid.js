import React from 'react'
import PropTypes from 'prop-types'
import ModalVideo from 'react-modal-video'

                            
const FeatureGrid = ({ gridItems, isOpen, videoId, setOpen, setVideoId }) => (
  <div className="columns is-multiline">
    <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    {gridItems.map((item) => (
      <div key={item.title} className="column is-6">
      <div style={{display:'flex', position:'relative'}}>
        <div onKeyDown={()=> [setOpen(true),setVideoId(item.id)]} onClick={()=> [setOpen(true),setVideoId(item.id)]} role="button" tabIndex={0}><img src={item.image} alt={item.title} /></div>
        <button aria-label="Play video in a modal" className="vidbtn" onClick={()=> [setOpen(true),setVideoId(item.id)]} />
      </div>
      <p style={{marginBottom:"0",marginTop:"20px"}}>{item.date}</p>
      <p style={{fontSize:"24px", fontFamily:"hk_groteskbold",marginBottom:"20px"}}>{item.title}</p>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,            
    })
  ),
}

export default FeatureGrid
