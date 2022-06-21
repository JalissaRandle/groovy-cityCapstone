import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <form className='outline' style={{ align:"center"}}>
      <div>
      <h1 className='title'> Sign Up</h1>
      <br />
      <div className="inputForm">
        <label htmlFor="name"> Name:</label>
        <input type="name" id='name' name='name'className='input' />
      </div >
      <div className="inputForm">
        <label htmlFor="email">  Email:</label>
        <input type="email" id='email' name='email'className='input' />
      </div>
      <div className="inputForm">
        <label htmlFor="password"> Password: </label>
        <input type="password" id='password' name='password' className='input'/>
      </div>
      <div className="inputForm">
        <label htmlFor="confimpass"> Confim password: </label>
        <input type="confirmpass" id='confirmpass' name='confirmpass' className='input'/>
      </div>
      <button className='button'>Create Account</button>
      </div>
    </form>
  )
}

export default SignUp