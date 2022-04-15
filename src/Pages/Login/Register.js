import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='form-container'>
            <h1 className='my-2 text-center text-primary'>Please Register</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' placeholder='Your Name Here' />
                <label htmlFor="email">Your Email</label>
                <input type="email" name='email'placeholder='Your Email Here'/>
                <label htmlFor="password">Your Password</label>
                <input type="password" name='password' placeholder='Your Password Here'/>
                <input className='btn btn-primary w-25 mx-auto my-3' type="submit" />
            </form>
            <p className='text-center'>Already Registered? <span onClick={() => navigate('/login')} className='text-warning' role='button'>Sign In</span></p>
        </div>
    );
};

export default Register;