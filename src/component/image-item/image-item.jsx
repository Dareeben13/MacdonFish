import React from 'react'
import Fade from 'react-reveal'

import gallery from '../../redux/gallery'

import './image-item.styles.scss'

const ImageItem = () => (
    <div className="image-item">
        {gallery.map(item => (
            <Fade bottom>
                <img src={item} alt="design pattern" style={{ width: "30%", margin: "3px" }} />
            </Fade>
        ))}
    </div>
)

export default ImageItem;