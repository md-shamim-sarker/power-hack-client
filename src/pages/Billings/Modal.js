import React from 'react';
import {useForm} from 'react-hook-form';

const Modal = ({render, setRender}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = billing => {
        billing.billing_id = String(Date.now());
        console.log(billing);
        fetch('https://power-hack-server-three.vercel.app/api/add-billing', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(billing)
        }).then((result) => {
            console.log(result);
            setRender(!render);
        }).catch(error => {
            console.error(error.message);
        });
    };

    return (
        <>
            <input type="checkbox" id="new-bill" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h1 className="text-2xl text-center font-bold">Billing Information</h1>
                    <label htmlFor="new-bill" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                            <input {...register("paid_amount")} type="text" placeholder="payable amount" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;