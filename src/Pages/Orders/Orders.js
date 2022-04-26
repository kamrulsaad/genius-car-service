import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {

    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getOrders = async () => {
            const url = `http://localhost:5000/orders?email=${user.email}`
            const { data } = await axios.get(url, { headers : {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`
            }})
            setOrders(data)
        }
        getOrders()
    }, [user])

    return (
        <div>
            <h1 className='text-center'>Orders: {orders.length} </h1>
        </div>
    );
};

export default Orders;