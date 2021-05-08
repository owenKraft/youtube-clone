import React, {} from 'react'
import Hamburger from './Hamburger.js'
import logo from '../resources/logo_dark_mode.svg'
import NavSearch from './NavSearch'
import NavRight from './NavRight'


const Navbar = (props) => {

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Hamburger 
                    height={"24"}
                    width={"24"}
                    fill={"white"}
                />
                <img className="logo" src={logo} alt="primary logo"></img>
            </div>
            <div className="search">
                <NavSearch />
            </div>
            <NavRight />
        </nav>
    )
}

export default Navbar