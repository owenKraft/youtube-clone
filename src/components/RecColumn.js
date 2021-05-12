import React from 'react'
import RecFilter from './RecFilter'
import RecList from './RecList'

const RecColumn = (props) => {
    const videoID = props.videoID

    return (
        <div className="rec-column">
            <RecFilter 
                videoID = {videoID}
            />
            <RecList 
                videoID = {videoID}
            />
        </div>
    )
}

export default RecColumn