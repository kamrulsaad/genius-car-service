import React from 'react';
import { useForm } from 'react-hook-form'
import PageTitle from '../Shared/PageTItle/PageTitle';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <PageTitle page='Add New Service'></PageTitle>
            <input {...register("firstName", { required: true, maxLength: 20 })} />
            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
        </form>
    );
};

export default AddServices;