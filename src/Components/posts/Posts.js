import React from 'react';
import Header from '../header/Header';
import './posts.css';


const postData = [
    {
        profile_img: "https://robohash.org/1",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/2",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/3",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas"
    },
    {
        profile_img: "https://robohash.org/4",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/5",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/6",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
        article:"amazingHey you are"
    },
    {
        profile_img: "https://robohash.org/7",
        firstname: "amaka",
        lastname:"umeh",
        title: "update",
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
                    <p>{val.firstname.toUpperCase()} {val.lastname.toUpperCase()}
                    <span>8:30pm</span>
                    </p>
                </div>
                <div className="article">
                    <h3>{val.title}</h3>
                    <p>{val.article}</p>
                </div>
            </div>
        </div>  
    </div>)
    })
    return (
        <div>
            <Header />
            <div className="bg-img">
                <div className="bg-color">
                    <div className="post-container">
                        {post} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
