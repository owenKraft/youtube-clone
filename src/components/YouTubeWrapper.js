import React from 'react'

const YouTubeWrapper = (props) => {
    const videoID = props.videoID

    return (
        <div className="youtube-wrapper">
            <iframe className="youtube-player" src={`https://www.youtube.com/embed/${videoID}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default YouTubeWrapper