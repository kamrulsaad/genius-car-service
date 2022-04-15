import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)

    const handleFormSubmit = e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    if(user) navigate('/home')
    
    return (
        <div>
            <h1 className='text-primary text-center my-3'>Please Login</h1>
            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {
                loading && <Spinner className='d-block mx-auto' animation = 'border'></Spinner>
            }
            <p className='text-center text-danger' >{error && error.message}</p>
            <p className='text-center'>New to Genius Car? <span onClick={() => navigate('/register')} className='text-warning' role='button'>Sign Up</span></p>
        </div>
    );
};

export default Login;