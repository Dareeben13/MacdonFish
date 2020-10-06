import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className="header-container">
        <div className="brand-name">
            <Link to="/">
                rotimi jemisenia
            </Link>
        </div>
        <div className="options">
            <Link to="/" className="option">
                Home
            </Link>

            <Link to="/exhibitions" className="option">
                Exhibitions
            </Link>

            <Link to="/contact" className="option">
                Contact
            </Link>

            <a href="https://www.instagram.com/therotimi_/" className="option" target="_blank" rel="noopener noreferrer">
                <i class="instagram icon" ></i>

            </a>
        </div>
    </div>
)

export default Header;