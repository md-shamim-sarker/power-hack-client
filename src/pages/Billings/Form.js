import React from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = billing => {
        console.log(billing);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl text-center font-bold">Billing Information</h1>
            <div className="form-control">

                <input {...register("full_name")} type="text" placeholder="full name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <input {...register("phone")} type="text" placeholder="phone" className="input input-bordered" />
            </div>
            <div className="form-control">
                <input {...register("amount")} type="text" placeholder="payable amount" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default Form;