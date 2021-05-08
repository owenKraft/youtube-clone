import React from 'react'

const NavRight = (props) => {
    return (
        <div className="nav-right">
            <i class="fas fa-th"></i>
            <i class="fas fa-ellipsis-v"></i>
            <button className="sign-in-button">
                <i class="fas fa-user-circle"></i>
                Sign in
            </button>
        </div>
    )
}

export default NavRight