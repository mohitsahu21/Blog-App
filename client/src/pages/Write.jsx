import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    upload();
  }
  
  return (
    <div className="add">
      <div className="content">
         <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
         <div className="editContainer">
         <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
         </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status:</b>Draft</span>
          <span><b>Visibility:</b>Public</span>
          <input  style={{display:"none"}} type="file" name='' id='file'  onChange={(e) => setFile(e.target.files[0])}  />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name='cat' id='art' value="art" onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' id='science' value="science" onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' id='technology' value="technology" onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="technology">Technology</label>
          </div>
           <div className="cat">
           <input type="radio" name='cat' id='food' value="food" onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="food">Food</label>
           </div>
          <div className="cat">
          <input type="radio" name='cat' id='cinema' value="cinema" onChange={(e) => setCat(e.target.value)} />
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
          <input type="radio" name='cat' id='design' value="design" onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="design">Design</label>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Write