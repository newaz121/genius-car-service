import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate =useNavigate();

    const navigateRegister =()=>{
        navigate ('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
    }

    return (

        <div className='register-form'>
            <h2>please register</h2>
            <from onSubmit={handleRegister}>
                <input type="text"  name='name'placeholder='Your Name'/>
       
                <input type="email"name='email'placeholder='Your Email' required/>
        
                <input type="password" name='password'placeholder='Your password' required/>
  
                <input type="submit" value="register" />
            </from>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Login</Link></p>
        </div>
    );
};

export default Register;