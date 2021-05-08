import React from 'react'
import Utilities from './Utilities.js'
import Like from '../resources/thumb-up.svg'
import Dislike from '../resources/thumb-down.svg'
import Share from '../resources/share.svg'
import Save from '../resources/playlist-plus.svg'
import Extra from '../resources/dots-horizontal.svg'

const VideoDetails = (props) => {
    const utilities = Utilities()
    const videoTitle = "Jadeveon Clowney unleashes vicious hit vs. Michigan in 2013 Outback Bowl | ESPN Archives"
    const numOfViews = 729072

    const videoDate = utilities.formatDate("2015-04-07T03:00:03.000Z")

    const numOfLikes = utilities.kFormatter(5132)
    const numOfDislikes = utilities.kFormatter(112)

    return (
        <div className="video-details">
            <h1 className="video-title">
                {videoTitle}
            </h1>
            <div className="video-details-data-bar">
                <div className="viewer-date-data">
                    <span className="video-details-num-of-view">
                        {numOfViews.toLocaleString('en-US')} views •&nbsp;
                    </span> 
                    <span className="video-details-video-date">
                        {videoDate}
                    </span>
                </div>
                <div className="video-details-button-bar">
                    <button className="likes-button button-bar-button">
                        <img src={Like} alt="like-button video" className="button-bar-button-img"></img>
                        <span className="button-bar-button-txt">{numOfLikes}</span>
                    </button>
                    <button className="dislikes-button button-bar-button">
                        <img src={Dislike} alt="dislike video" className="button-bar-button-img"></img>
                        <span className="button-bar-button-txt">{numOfDislikes}</span>
                    </button>
                    <button className="share-button button-bar-button">
                        <img src={Share} alt="share video" className="button-bar-button-img"></img>
                        <span className="button-bar-button-txt">Share</span>
                    </button>
                    <button className="save-button button-bar-button">
                        <img src={Save} alt="save video" className="button-bar-button-img"></img>
                        <span className="button-bar-button-txt">Save</span>
                    </button>
                    <button className="extra-button button-bar-button">
                        <img src={Extra} alt="extra options" className="button-bar-button-img"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails