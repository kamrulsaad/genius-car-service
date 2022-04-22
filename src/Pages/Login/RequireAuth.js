import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTItle/PageTitle';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [sendEmailVerification, sending] = useSendEmailVerification(auth)
    const location = useLocation()


    if (loading || sending) return <Loading></Loading>

    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return (
            <div className='text-center text-danger my-5'>
                <PageTitle page='Verify Email'></PageTitle>
                <h1 className='my-5'>Your Email is not verified</h1>
                <h3 className='text-success'> Please Check your email to verify it is you </h3>
                <button onClick={async () => {
                    await sendEmailVerification()
                    toast("Verification Email Sent", { position: 'top-center' })
                }} className='btn btn-info rounded-pill my-5'>Resend Verification Email</button>
                <ToastContainer></ToastContainer>
            </div>
        )
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    else return children

};

export default RequireAuth;