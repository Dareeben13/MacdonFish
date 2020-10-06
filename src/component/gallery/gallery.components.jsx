import React from 'react'

import ImageItem from '../image-item/image-item'

import './gallery.styles.scss'


const Gallery = () => (
    <div className="gallery-container">
        <ImageItem />
        <div className="gallery-footer">

            <a href="https://www.instagram.com/therotimi_/" className="option" target="_blank" rel="noopener noreferrer">
                <i className="instagram icon" ></i>

            </a>
        </div>
    </div>
)

export default Gallery;