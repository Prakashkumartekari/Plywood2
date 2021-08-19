import React from 'react'
import { galleryData } from '../../../Data/FeaturesData'
import Header from '../../Header/Header'
import "./gallery.css"
import Quote from '../Quote/Quote'

const Gallery = () => {
          return (
                    <div>
                            <Header Heading="Gallery"/>
                            <div className="gallery__container">
                                      <h2>Gallery</h2>
                                      <div className="galleryWrap">

                                      {galleryData.map(item=>(
                                      <div className="galleryCard" key={item.name}>
                                                <img src={item.img} alt={item.name}/>
                                      </div>
                                      ))}
                                      </div>
                            </div>
                             <Quote/>
                    </div>
          )
}

export default Gallery
