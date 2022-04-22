import React from 'react';
import { useForm } from 'react-hook-form'
import PageTitle from '../Shared/PageTItle/PageTitle';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = "http://localhost:5000/services"
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center">Please Add a Service</h1>
            <PageTitle page='Add New Service'></PageTitle>
            <div className="d-flex flex-column mx-auto gap-3 w-50">
                <input placeholder='Name' className='p-2 border-1 rounded text-uppercase' {...register("name")} />
                <textarea placeholder='Description' className='p-2 border-1 rounded' {...register("description")} />
                <input placeholder='Price' className='p-2 border-1 rounded' type="number" {...register("price")} />
                <input placeholder='Photo URL' className='p-2 border-1 rounded' {...register("img")} />
                <input placeholder='' className='p-2 border-1 rounded bg-primary text-white' type="submit" value='Add New Service'/>
            </div>
        </form>
    );
};

export default AddServices;