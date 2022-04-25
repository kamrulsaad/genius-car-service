import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';
import PageTitle from '../Shared/PageTItle/PageTitle';

const ServiceDetails = () => {

    const { serviceId } = useParams()
    const [service] = useService(serviceId) 

    return (
        <div>
            <PageTitle page="Service Details"></PageTitle>
            <h1>Welcome to Service {service.name}</h1>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;