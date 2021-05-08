import React from 'react'

const Hamburger = (props) => {
    const height = props.height || 40
    const width = props.width || 40
    const fill = props.fill || "black"

    return (
        <svg className="hamburger" 
            viewBox="0 0 100 80" 
            width={width} 
            height={height} 
            fill={fill}
        >
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
        </svg>
    )
}

export default Hamburger