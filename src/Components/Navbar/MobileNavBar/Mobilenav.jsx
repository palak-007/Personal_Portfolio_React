import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNav.css'

const Mobilenav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className='mobile-menu-container'>
                    <div className='mobile-logo'>Portfolio</div>
                    <ul>
                        <Link to='/'> <a href='' className='nav-item'>Home</a> </Link>
                        <Link to='/about'> <a href='#about-section' className='nav-item'>About</a> </Link>
                        <Link to='/skill'> <a href='#skill-section' className='nav-item'>Skills</a> </Link>
                        <Link to='/project'> <a href='#project-section' className='nav-item'>Projects</a> </Link>
                        <Link to='/contact'> <a href='#contact-section' className='nav-item'>Contact Me</a> </Link>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Mobilenav