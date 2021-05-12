import React from 'react'
import VideoColumn from './VideoColumn'
import RecColumn from './RecColumn'

const Main = (props) => {
    const videoID = "2JYx-_eXQa4"

    return (
        <div className="main">
            <VideoColumn
                videoID = {videoID}
            />
            <RecColumn
                videoID = {videoID}
            />
        </div>
    )
}

export default Main