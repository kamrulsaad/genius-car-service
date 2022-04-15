import React from 'react';
import google from '../../../src/images/Social/google.png'
import facebook from '../../../src/images/Social/facebook.jpg'
import github from '../../../src/images/Social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth)

    const error = googleError || githubError ;
    const loading = googleLoading || githubLoading;
    const user = googleUser || githubUser ;

    if(user) navigate(from, {replace: true})

    return (
        <div>
            {
                loading && <Spinner animation='border' className='d-block mx-auto'></Spinner>
            }
            {error && <p className='text-danger text-center'>{error.message}</p> }
            <div className='d-flex align-items-center w-50 mx-auto'>
                <div className='w-50 bg-secondary' style={{ height: '1px' }}></div>
                <p className='mt-2 px-2'>Or</p>
                <div className='w-50 bg-secondary' style={{ height: '1px' }}></div>

            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-outline-secondary rounded-pill d-block mx-auto mb-2'>
                <img height={30} src={google} alt="" />
                <span className='ms-2'>Sign In With Google</span>
            </button>
            <button className='btn btn-outline-primary rounded-pill d-block mx-auto mb-2'>
                <img style={{borderRadius : '50%'}} height={30} src={facebook} alt="" />
                <span className='ms-2'>Sign In With Facebook</span>
            </button>
            <button onClick={() => signInWithGithub() } className='btn btn-outline-dark rounded-pill d-block mx-auto mb-2'>
                <img height={30} src={github} alt="" />
                <span className='ms-2'>Sign In With Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;