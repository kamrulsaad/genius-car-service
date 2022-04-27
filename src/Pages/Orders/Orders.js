import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        const getOrders = async () => {
            const url = `http://localhost:5000/orders?email=${user.email}`
            try{
                const { data } = await axiosPrivate.get(url)
                setOrders(data)
            }
            catch(error) {
                if(error.response.status === 403 || error.response.status === 401){
                    navigate('/login')
                    signOut(auth)
                }
            }
        }
        getOrders()
    }, [user, navigate])

    return (
        <div>
            <h1 className='text-center'>Orders: {orders.length} </h1>
        </div>
    );
};

export default Orders;