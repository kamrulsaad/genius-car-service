import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Spinner } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../Shared/PageTItle/PageTitle';
import useToken from '../../hooks/useToken';

const Register = () => {

    const [agree, setAgree] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification : true});
    const [updateProfile] = useUpdateProfile(auth)
    const [token] = useToken(user)

    useEffect(() => {
        if (token) navigate(from, { replace: true });
    },[token, navigate, from])

    const handleFormSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName : name})
    }

    return (
        <div className='form-container'>
            <PageTitle page="Register"></PageTitle>
            <h1 className='my-2 text-center text-primary'>Please Register</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' />
                <label htmlFor="email">Your Email</label>
                <input type="email" name='email' required/>
                <label htmlFor="password">Your Password</label>
                <input type="password" name='password' required/>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" value='Accept Terms and Conditions' id="terms" />
                <label className={`ps-2  ${agree ? '' : 'text-danger'}`} htmlFor="terms" >I agree to the terms and conditions</label>
                <input disabled={!agree} className='btn btn-primary w-25 mx-auto my-3' type="submit" value='Sign Up' />
            </form>
            {
                loading && <Spinner className='mx-auto d-block' animation="border" />
            }
            <p className='text-center text-danger'>{error && error.message}</p>
            <p className='text-center'>Already Registered? <span onClick={() => navigate('/login')} className='text-warning' role='button'>Sign In</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;