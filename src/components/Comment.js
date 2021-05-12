import React from 'react'
import Utilities from './Utilities'
import PlaceholderProfilePhoto from '../resources/channel-logo.jpeg'
import Like from '../resources/thumb-up.svg'
import Dislike from '../resources/thumb-down.svg'

const Comment = (props) => {
    const utilities = Utilities()
    const profileImg = props.profileImg || PlaceholderProfilePhoto
    const username = props.username || "Timothy Banks"
    const commentAgeInYears = props.commentAgeInYears || 2
    const commentText = props.commentText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const numOfReplies = props.numOfReplies || 19
    const numOfLikes = utilities.kFormatter(props.numOfLikes) || utilities.kFormatter(2675)

    return (
        <div className="comment">
            <div className="comment-details">
                <div className="commenter-profile-img">
                    <img src={profileImg} alt="user profile"></img>
                </div>
                <div className="comment-specifics">
                    <div className="comment-header">
                        <span className="commenter-username">
                            {username}
                        </span>
                        <span className="comment-age">
                            {commentAgeInYears} year(s) ago
                        </span>
                    </div>
                    <div className="comment-text">
                        {commentText}
                    </div>
                    <div className="comment-buttons">
                        <button className="likes-button comment-button">
                            <img src={Like} alt="like-button video" className="comment-button-img"></img>
                            <span className="comment-button-txt">{numOfLikes}</span>
                        </button>
                        <button className="dislikes-button comment-button">
                            <img src={Dislike} alt="dislike video" className="comment-button-img"></img>
                        </button>
                        <button className="reply-button comment-button">
                            <span className="comment-button-txt">Reply</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="comment-replies">
                <i class="fas fa-caret-down"></i>
                View {numOfReplies} replies
            </div>
        </div>
    )
}

export default Comment