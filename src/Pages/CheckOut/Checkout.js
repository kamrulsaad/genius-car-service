import React from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import PageTitle from '../Shared/PageTItle/PageTitle';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import axios from 'axios';
import { Slide, toast, ToastContainer } from 'react-toastify';

const Checkout = () => {

    const {serviceId} = useParams()
    const [service] = useService(serviceId)
    const [user] = useAuthState(auth)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const order = {
            name : user.displayName,
            email : user.email,
            service : service.name,
            address : e.target.address.value,
            phone : e.target.phone.value,
            serviceId
        }
        axios.post('https://genius-car-service-by-saad.herokuapp.com/orders', order)
        .then(res => {
            if(res.data.insertedId) toast('Your Order is booked', { position : 'top-center', transition: Slide })})
        e.target.reset()
    }

    return (
        <div className='mt-1 w-50 mx-auto'>
            <h1 className='text-center'>Please Order {service.name} </h1>
            <PageTitle page="Check Out"></PageTitle>
            <form onSubmit={handleFormSubmit}>
                <label className='text-start fs-6' htmlFor="name">Name</label>
                <input className='w-100 mb-2 py-2 fs-5 rounded px-1' type="text" value={user?.displayName || ""} disabled readOnly name='name'/> <br />
                <label className='text-start fs-6' htmlFor="email">Email</label>
                <input className='w-100 mb-2 py-2 fs-5 rounded px-1' type="text" value={user?.email || ""} disabled readOnly name='email' /> <br />
                <label className='text-start fs-6' htmlFor="service">Service</label>
                <input className='w-100 mb-2 py-2 fs-5 rounded px-1' type="text" name='service' value={service.name || ""} readOnly disabled/> <br />
                <label className='text-start fs-6' htmlFor="phone">Phone</label>
                <input className='w-100 mb-2 py-2 fs-5 rounded px-1' type="text" name='phone' placeholder='Phone' required /> <br />
                <label className='text-start fs-6' htmlFor="address">Address</label>
                <input className='w-100 mb-2 py-2 fs-5 rounded px-1' type="text" name='address' placeholder='Address'required /> <br />
                <input type="submit" className='btn btn-primary  rounded d-block mx-auto' value='Place Order' />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;