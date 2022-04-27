import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Slide, toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../Shared/PageTItle/PageTitle';
import useToken from '../../hooks/useToken';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const [signInWithEmailAndPassword, user, loading, loadingError] = useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail, sending, sendingError] = useSendPasswordResetEmail(auth)
    const [token] = useToken(user)

    const error = loadingError || sendingError;

    useEffect(() => {
        if (token) navigate(from, { replace: true });
    },[token, navigate, from])

    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email)
            toast("Email Sent", {
                position: 'top-center',
                transition : Slide
            })
        } else toast('Please Enter Your Email', {
            position: "top-center", transition: Slide
        })
    }

    return (
        <div>
            <PageTitle page="Login"></PageTitle>
            <h1 className='text-primary text-center my-3'>Please Login</h1>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
            <p className='text-center text-danger' >{error && error.message}</p>
            <p className='text-center'>New to Genius Car? <span onClick={() => navigate('/register')} className='text-warning' role='button'>Sign Up</span></p>
            <p className='text-center'>Forgot Password? <span onClick={resetPassword} className='text-danger' role='button'>Reset Password</span></p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;