import React from 'react';
import Logo from "../images/logo.png";

const Footer = () => {
  return (
   <footer>
    <img src={Logo} alt="logo" />
    <span>
      Made by Mohit Sahu <b>React.js</b>
    </span>
   </footer>  
  )
}

export default Footer