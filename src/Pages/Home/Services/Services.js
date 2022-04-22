import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services] = useServices()

    return (
        <div id='services'>
            <h1 className='text-center py-5 text-primary' >Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service._id} service = {service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;