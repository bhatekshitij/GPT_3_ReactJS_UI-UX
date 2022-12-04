import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';




const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="LOGO" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgtp3">what is GPT3</a></p>
                    <p><a href="#possibilities">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>sign in</p>
                <button type='button'>Sign up</button>
            </div>

            {/* This is the start of Mobile version Menu and Navbar  */}
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> /// the "?" represents that if the condition is true, and the ":" represents if the condition is false
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgtp3">what is GPT3</a></p>
                            <p><a href="#possibilities">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                            {/* Links Container End */}
                            {/* Sign in Container */}
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>sign in</p>
                                <button type='button'>Sign up</button>
                            </div>

                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar;