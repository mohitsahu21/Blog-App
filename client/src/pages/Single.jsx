import React, { useEffect, useState } from "react";
import Edit from '../images/edit.png';
import Delete from '../images/delete.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="image" />
        <div className="user">
          <img src="https://images.pexels.com/photos/17286100/pexels-photo-17286100/free-photo-of-sunlit-face-of-man-in-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="userimage" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          { currentUser.username === post.username &&<div className='edit'>
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="edit" />
            </Link>
            
            <img src={Delete} alt="delete" />
          </div>}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      
    </div>
  )
}

export default Single;