import React from 'react'
import VideoColumn from './VideoColumn'
import RecColumn from './RecColumn'

const Main = (props) => {

    return (
        <div className="main">
            <VideoColumn />
            <RecColumn />
        </div>
    )
}

export default Main