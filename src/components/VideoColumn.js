import React from 'react'
import YouTubeWrapper from './YouTubeWrapper'
import VideoDetails from './VideoDetails'
import ChannelInfo from './ChannelInfo'
import CommentArea from './CommentArea'

const VideoColumn = (props) => {
    const videoID = props.videoID

    return (
        <div className="video-column">
            <YouTubeWrapper 
                videoID = {videoID}
            />
            <VideoDetails 
                videoID = {videoID}
            />
            <ChannelInfo 
                videoID = {videoID}
            />
            <CommentArea
                videoID = {videoID}
            />
        </div>
    )
}

export default VideoColumn