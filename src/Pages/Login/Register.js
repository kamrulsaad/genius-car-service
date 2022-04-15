import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Spinner } from 'react-bootstrap';

const Register = () => {

    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    if(user) navigate('/home')

    const handleFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <h1 className='my-2 text-center text-primary'>Please Register</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' placeholder='Your Name Here' />
                <label htmlFor="email">Your Email</label>
                <input type="email" name='email'placeholder='Your Email Here' required/>
                <label htmlFor="password">Your Password</label>
                <input type="password" name='password' placeholder='Your Password Here' required/>
                <input className='btn btn-primary w-25 mx-auto my-3' type="submit" />
            </form>
            {
                loading && <Spinner className='mx-auto d-block' animation="border" />
            }
            <p className='text-center text-danger'>{error && error.message}</p>
            <p className='text-center'>Already Registered? <span onClick={() => navigate('/login')} className='text-warning' role='button'>Sign In</span></p>
        </div>
    );
};

export default Register;