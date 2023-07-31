import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link,useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const cat = useLocation().search
  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {

    if(currentUser == null){
      navigate('/login')
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://blog-app-api-ygiz.onrender.com/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);


const getText = (html) =>{
  const doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent
}


  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="postimg" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>
                {post.title}
              </h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className='link' to={`/post/${post.id}`}> <button>Read More</button></Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Home