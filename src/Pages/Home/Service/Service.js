import React from 'react';

const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div className='services-card'>
            <img src={img} alt="" />
            <div className="service-details">
                <h3>{name}</h3>
                <p><small>{description}</small></p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Service;