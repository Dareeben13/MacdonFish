import React from 'react'
import Fade from 'react-reveal'

import gallery from '../../redux/gallery'

import './image-item.styles.scss'

let count = 0;

const ImageItem = () => (
    <div className="image-item">
        {gallery.map(item => (
            <Fade right key={count++}>
                <img src={item} alt="design pattern" />
            </Fade>
        ))}
    </div >
)

export default ImageItem;