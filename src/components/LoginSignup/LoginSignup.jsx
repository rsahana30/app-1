import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import PropTypes from 'prop-types';
const LoginSignup = ({onLogin}) => {
const[action,setAction]=useState("Sign up");
// const history = history();


  return (
    <div className='container'>
      <div className='header'>
      <div className='text'>{action}</div>
      <div className='underline'></div>
        </div> 
        <div className='inputs'>
          {action==="Login"?<div></div>: < div className='input'>
        <img src={user_icon} alt=""/>
        
        <input type="text" placeholder='Name'/>
        </div>}
        <div className='inputs'>
        <div className='input'>
        <img src={email_icon} alt=""/>
        <input type="email" placeholder='Email Id'/>
        </div>
        <div className='inputs'>
        <div className='input'>
        <img src={password_icon} alt=""/>
        <input type="password" placeholder='Password'/>
        </div></div>
        {action==="Sign Up"?<div></div>:<div className='forgot-password'>Forgot password? <span>Click here!</span></div>}
        <div className='submit-container'>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Sign up</div>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("/general")}}>Login</div>


      </div> 
    </div>
    </div>
    </div>
  )
}


export default LoginSignup
