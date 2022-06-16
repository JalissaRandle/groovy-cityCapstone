import { useState } from "react"
import React from 'react'
import './Login.css'

const LoginForm = ({ Login, error}) => {
    const [details, setDetails] = useState ({name:"", email:"", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


  return (
    <form onSubmit={submitHandler} className="outline">
        <div className='form-inner'>
            <h2 className="title"> Login</h2>
            {(error !== "") ? ( <div className="error">{error}</div>) : ""}
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name} className="inputs" />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email} className="inputs"/>
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} className="inputs"/>
            </div>
            <input type="submit" value="Log-In" />
        </div>
    </form>
  )
}

export default LoginForm;