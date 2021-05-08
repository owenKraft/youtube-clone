import React from 'react'

const NavSearch = (props) => {

    return (
        <div className="search-area">
            <div className="search-bar">
                <input className="search-input" placeholder="Search"></input>
                <button className="search-button">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div className="search-voice">
                <i class="fas fa-microphone"></i>
            </div>
        </div>
    )
}

export default NavSearch