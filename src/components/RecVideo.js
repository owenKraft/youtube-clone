import React from 'react'
import Utilities from './Utilities.js'
import DefaultThumbnail from '../resources/default_thumbnail.jpeg'

const RecVideo = (props) => {
    const utilities = Utilities()
    const thumbnailSrc = props.thumbnailSrc || DefaultThumbnail
    const timestamp = props.timestamp || "17:13"
    const title = props.title || "Top 10 SEC Football Moments of the Decade"
    const channel = props.channel || "SEC Football Vids"
    const views = utilities.kFormatter(props.views) || utilities.kFormatter(21392)
    const age = props.age || 3

    return (
        <div className="rec-video">
            <div className="rec-thumbnail">
                <img src={thumbnailSrc} alt="thumbnail" className="rec-thumbnail-img"></img>
                <div className="rec-thumbnail-timestamp">{timestamp}</div>
            </div>
            <div className="rec-details">
                <div className="rec-title">{title}</div>
                <div className="rec-channel">{channel}</div>
                <div className="rec-stats">
                    <span className="rec-views">{views} views •&nbsp;</span>
                    <span className="rec-age">{age} year(s) ago</span>
                </div>

            </div>
        </div>
    )
}

export default RecVideo