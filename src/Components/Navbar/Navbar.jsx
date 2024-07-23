import React, { useState } from 'react'
import './Navbar.css'
import Mobilenav from './MobileNavBar/Mobilenav';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setopenMenu] = useState(false);

    const toggleMenu = () => {
        setopenMenu(!openMenu);
    };

    return (
        <>
            <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu}></Mobilenav>

            <nav className='nav-container'>
                    <div className='nav-content'>
                        <div className='logo'>Portfolio</div>
                        <ul>
                            <Link to='/'> <a href='' className='nav-item'>Home</a> </Link>
                            <Link to='/about'> <a href='#about-section' className='nav-item'>About</a> </Link>
                            <Link to='/skill'> <a href='#skill-section' className='nav-item'>Skills</a> </Link>
                            <Link to='/project'> <a href='#project-section' className='nav-item'>Projects</a> </Link>
                            <Link to='/contact'> <a href='#contact-section' className='nav-item'>Contact Me</a> </Link>
                        </ul>

                        <button className='menu-btn' onClick={toggleMenu}>
                            <span
                                className={"material-symbols-outlined"}
                                style={{ fontSize: "1.8rem" }}
                            >
                                {openMenu ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
