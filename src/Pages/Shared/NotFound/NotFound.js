import React from 'react';
import PageTitle from '../PageTItle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle page="404"></PageTitle>
            <h2 className='text-danger text-center mt-2'>Mechanic is Sleeping</h2>          
            <img className='d-block mx-auto' src="https://coastwiderwc.com.au/wp-content/uploads/2017/08/slepping-mechanic.jpg" alt="" />
        </div>
    );
};

export default NotFound;