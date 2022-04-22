import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const navigate = useNavigate()
    const {_id, name, img, description, price } = service;

    const navigatetoServiedetails = id => navigate(`/services/${id}`)

    return (
        <div className='services-card'>
            <img src={img} alt="" />
            <div className="service-details">
                <h3>{name}</h3>
                <p><small>{description}</small></p>
                <p><b>Price: ${price}</b></p>
                <button onClick={() => navigatetoServiedetails(_id)} className='btn btn-info text-white'> Book Now</button>
            </div>
        </div>
    );
};

export default Service;