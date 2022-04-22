import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTItle/PageTitle';

const ServiceDetails = () => {

    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId])


    return (
        <div>
            <PageTitle page="Service Details"></PageTitle>
            <h1>Welcome to Service {service.name}</h1>
            <div className="text-center">
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;