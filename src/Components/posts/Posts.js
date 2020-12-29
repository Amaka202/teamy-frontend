import React from 'react';
import './posts.css';
import WriteArticle from "../writearticle/WriteArticle"

const postData = [
    {
        profile_img: "https://robohash.org/1",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/2",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/4",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/5",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/6",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/7",
        firstname: "amaka",
        lastname:"umeh",
        article:"amazingHey you are"
    }
    
]

function Post() {

    const post = postData.map((val, index) => {
        return (<div className="post">
        <div className="pic-name-div">
            <div className="img=flex">
                <div className="post-img-div">
                    <img src={val.profile_img} alt="profile-pic"/>
                </div>
            </div>
            <div className="name-article-div">
                <div className="name-div">
                    <p>{val.firstname}{val.lastname}
                    <span>8:30pm</span>
                    </p>
                </div>
                <div className="article">
                    <p>{val.article}</p>
                </div>
            </div>
        </div>  
    </div>)
    })
    return (
        <div>
            <div className="post-container">
                 {post} 
             </div>
             <WriteArticle />
        </div>
    )
}

export default Post
