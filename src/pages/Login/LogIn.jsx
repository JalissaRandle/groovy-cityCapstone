import React, { useState } from 'react';
import LoginForm from './LoginForm';
import "./Login.css"

const LogIn = () => {

    const adminUser ={
        email:"admin@admin.com",
        password:"admin123"
    }

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("")

    const Login = details => {
        console.log(details);

        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log('logged in');
            setUser({
                name:details.name,
                email: details.email
            })
        }else {
            console.log('Details do not match')
            setError("Details do not match.")
        }
    }
    const Logout = () => {
        console.log('LogOut');
        setUser ({ name: "", email:""});
    }
  return (
    <div className='Container'>
        {(user.email !=="") ? (
            <div className='Welcome' >
                <h2 style={{ fontSize: 50 }}>Welcome, <span>{user.name}</span></h2>
                <button onClick={Logout} className="button">Logout</button>
            </div>
        ) : (
            <LoginForm Login={Login} error={error} className=""LoginForm/>
        )}

    </div>
  )
}

export default LogIn