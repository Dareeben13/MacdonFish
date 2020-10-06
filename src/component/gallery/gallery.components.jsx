import React from 'react'
import ScrollToTop from 'react-scroll-to-top'

import ImageItem from '../image-item/image-item'

import './gallery.styles.scss'


const Gallery = () => (
    <div className="gallery-container">
        <ScrollToTop smooth color="#6f00ff" />
        <ImageItem />
        <div className="gallery-footer">
            <a href="https://www.instagram.com/therotimi_/" className="option" target="_blank" rel="noopener noreferrer">
                <i className="instagram icon" ></i>
            </a>
            <div className="meta">
                Check Out My Instagram Page for Updates
            </div>
        </div>
    </div>
)

export default Gallery;