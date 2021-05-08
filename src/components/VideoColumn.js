import React from 'react'
import YouTubeWrapper from './YouTubeWrapper'
import VideoDetails from './VideoDetails'

const VideoColumn = (props) => {
    const videoID = "2JYx-_eXQa4"

    return (
        <div className="video-column">
            <YouTubeWrapper 
                videoID = {videoID}
            />
            <VideoDetails 
                videoID = {videoID}
            />
        </div>
    )
}

export default VideoColumn