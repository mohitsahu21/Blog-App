import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [inputs,setInputs] = useState({
      username:"",
      email:"",
      password:""
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e =>{
      setInputs(prev=>({...prev,[e.target.name] : e.target.value}))
  }
  console.log(inputs);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
      const res = await axios.post("/auth/register", inputs);
       console.log(res)
       if(res.status == 200){
        navigate("/login");
       }
        
      }

     catch (err) {
      setError(err.response.data);
    }
  };
  return (
      <div className='auth'>
          <h1>Register</h1>
          <form>
              <input  type='text' name='username' placeholder='Username' onChange={handleChange} required />
              <input  type='email' name='email' placeholder='Email' onChange={handleChange}  required/>
              <input  type='password' name='password' placeholder='Password' onChange={handleChange} required/>
              <button onClick={handleSubmit}>Register</button>
              {err && <p>{err}</p>}
              <span>
                Have an account? <Link to="/login">Login</Link>
              </span>
          </form>
      </div>
  )
}

export default Register