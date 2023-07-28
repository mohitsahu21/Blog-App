import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const posts = [{
    id:1,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  },
  {
    id:2,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  },
  {
    id:3,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  },
  {
    id:4,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  },
  {
    id:5,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry",

    img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
    
  },
];
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="postimg" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>
                {post.title}
              </h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Home