import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Home/Service/Service';
import PageTitle from '../Shared/PageTItle/PageTitle';

const ManageServices = () => {

    const [services, setServices] = useServices()

    const handleDelete = id => {
        const url = `https://genius-car-service-by-saad.herokuapp.com/service/${id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            const newServices = services.filter(service => service._id !== id)
            setServices(newServices)
        })
    }

    return (
        <div className='text-center mt-3'>
            <PageTitle page='Manage Services'></PageTitle>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service._id} service = {service}>
                        <button onClick={() => handleDelete(service._id)} className='btn btn-info text-white'> Delete Service</button>
                    </Service>)
                }
            </div>
        </div>
    );
};

export default ManageServices;