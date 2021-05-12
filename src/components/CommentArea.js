import React from 'react'
import AddComment from './AddComment'
import Comment from './Comment'
import Sort from '../resources/sort.svg'

const CommentArea = (props) => {
    const numOfComments = 703

    return (
        <div className="comments-area">
            <div className="comments-data">
                <span className="num-comments">{numOfComments} Comments</span>
                <button className="sort-comments-button">
                    <img src={Sort} alt="sort" className="sort-comments-img"></img>
                    Sort By
                </button>
            </div>
            <AddComment />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwniA5vbGUkpEJeNU0rV1UqMHicS4U2K7pkaEuMcbOw=s88-c-k-c0x00ffffff-no-rj"
                username = "Tony Sacrimoni"
                commentAgeInYears = {2}
                commentText = "The refs weren't checking for a fumble, they just wanted to see the replay."
                numOfReplies = {19}
                numOfLikes = {2600}
            />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwniXyHrsXeez1UVpRdcemc235FDZjyQByLpAazdvxQ=s88-c-k-c0x00ffffff-no-rj"
                username = "CHAPO HEMI"
                commentAgeInYears = {1}
                commentText = "Homie woke up in the next episode of dragon ball z"
                numOfReplies = {744}
                numOfLikes = {10}
            />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwnjjCllPE2jdXg1Q4yDMoaWSzEwZM7N98Ck0Tg=s88-c-k-c0x00ffffff-no-rj"
                username = "dabby dabby"
                commentAgeInYears = {2}
                commentText = "Is that running back ok? It's 2019 just checking"
                numOfReplies = {38}
                numOfLikes = {1200}
            />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwngc9Rd_jo7HSGkgJZBQ4X9TjZePbiT7ioeE0stofw=s88-c-k-c0x00ffffff-no-rj"
                username = "Fast-Lane Jones"
                commentAgeInYears = {2}
                commentText = "One of the most iconic plays in NCAA history"
                numOfReplies = {16}
                numOfLikes = {1000}
            />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwng_88DXQZnmRRQ03RjAVL6Y0_GrbCeVxVyY2Q=s88-c-k-c0x00ffffff-no-rj"
                username = "David Ellis"
                commentAgeInYears = {2}
                commentText = "That play earned him millions of dollars."
                numOfReplies = {7}
                numOfLikes = {292}
            />
            <Comment 
                profileImg = "https://yt3.ggpht.com/ytc/AAUvwngzlRN7vOth2dapt7k_K0GU-rKqVh0_oE3K_g=s88-c-k-c0x00ffffff-no-rj"
                username = "Vincent Hutter"
                commentAgeInYears = {1}
                commentText = "I remember watching this hit live and I thought he killed the guy lol"
                numOfReplies = {11}
                numOfLikes = {346}
            />
        </div>
    )
}

export default CommentArea