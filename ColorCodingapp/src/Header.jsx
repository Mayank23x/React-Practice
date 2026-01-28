import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <h2>Color Coding App</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/color-coding">Color Coding</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
