import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service, children }) => {

    const navigate = useNavigate()
    const {_id, name, img, description, price } = service;

    const navigatetoServiedetails = id => navigate(`/services/${id}`)

    return (
        <div className='services-card'>
            <img src={img} alt="" />
            <div className="service-details">
                <h3 className='text-uppercase' >{name}</h3>
                <p><small>{description}</small></p>
                <p><b>Price: ${price}</b></p>
                <button onClick={() => navigatetoServiedetails(_id)} className='btn btn-info me-2 text-white'> Book Now</button>
                {children}
            </div>
        </div>
    );
};

export default Service;