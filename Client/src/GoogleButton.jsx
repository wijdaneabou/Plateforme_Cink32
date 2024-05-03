import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Form.css';
import GoogleIcon from './assets/google.png'; 
const GoogleButton = () => {

    const handleLogin = () => {
            window.location = 'http://localhost:3000/auth/google';
      };
    
      return (
        <>
        <button className="google" onClick={handleLogin}><p>Continue with Google</p><img className="icongoogle" src={GoogleIcon} alt="" /> </button>
        </>
      );
};

export default GoogleButton;