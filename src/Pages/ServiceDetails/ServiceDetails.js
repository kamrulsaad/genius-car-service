import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTItle/PageTitle';

const ServiceDetails = () => {

    const { serviceId } = useParams()

    return (
        <div>
            <PageTitle page="Service Details"></PageTitle>
            <h1>Welcome to Service {serviceId}</h1>
            <div className="text-center">
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;