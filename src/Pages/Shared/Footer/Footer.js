import React from 'react';

const Footer = () => {

    const today = new Date()
    const year = today.getFullYear();

    return (
        <div className='text-center my-4'>
            <h6>Copyright  &copy; {year}</h6>
        </div>
    );
};

export default Footer;