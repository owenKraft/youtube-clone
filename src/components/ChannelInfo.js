import React from 'react'
import Utilities from './Utilities'
import ChannelLogo from '../resources/channel-logo.jpeg'
import Verified from '../resources/verified.svg'

const ChannelInfo = (props) => {
    const utilities = Utilities()

    const channelTitle = "ESPN College Football"
    const channelSubscriberCount = utilities.kFormatter(172397)
    const channelDescription = `Back in Jadeveon Clowney’s college days at the University of South Carolina, the star defender landed a now-infamous hit on Michigan running back Vincent Smith, jarring the ball loose for a fumble and popping off Smith’s helmet in the process during the 2013 Outback Bowl.

    ✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE​
    ✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC​
    ✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN​
    ✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV​

    ESPN on Social Media:
    ► Follow on Twitter: http://www.twitter.com/espn​
    ► Like on Facebook: http://www.facebook.com/espn​
    ► Follow on Instagram: www.instagram.com/f/espn

    Visit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more.

    More on ESPN.com: http://www.espn.com`

    let toggleText = "Show more"

    const showFullDescription = () => {
        const channelDescription = document.querySelector(".channel-description")

        channelDescription.classList.toggle("show-less")

        const toggle = document.querySelector(".show-more-toggle")

        if(toggleText === "Show more"){
            toggle.innerText = "Show less"
            toggleText = "Show less"
        } else if(toggleText === "Show less") {
            toggle.innerText = "Show more"
            toggleText = "Show more"
        }
    }

    return (
        <div className="channel-wrapper">
            <div className="channel-info-wrapper">
                <img src={ChannelLogo} alt="channel logo" className="channel-logo"></img>
                <div className="channel-info">
                    <div className="channel-title">
                        {channelTitle}
                        <img src={Verified} alt="verified channel" className="verified-img"></img>
                    </div>
                    <div className="channel-subscriber-count">
                        {channelSubscriberCount} subscribers
                    </div>
                </div>
                <button className="subscribe-btn-main">
                    Subscribe
                </button>
            </div>
            <pre className="channel-description show-less">
                {channelDescription}
            </pre>
            <button className="show-more-toggle" onClick={showFullDescription}>
                {toggleText}
            </button>
        </div>
    )
}

export default ChannelInfo