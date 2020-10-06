import React from 'react'

import gallery from '../../redux/gallery'

import './image-item.styles.scss'

const ImageItem = () => (
    <div className="image-item">
        {gallery.map(item => (
            <img src={item} alt="design pattern" style={{ width: "30%", margin: "3px" }} />
        ))}
    </div>
)

export default ImageItem;