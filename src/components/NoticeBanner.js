import React from 'react'

const NoticeBanner = (props) => {
    const text = props.text || "Oops, looks like I forgot to pass in custom text"

    return (
        <div className="notice-banner">
            {props.text}
        </div>
    )
}

export default NoticeBanner