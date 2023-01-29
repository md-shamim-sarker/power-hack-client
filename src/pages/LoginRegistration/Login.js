import React from 'react';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import power from '../../assets/power-station.png';

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-3/5">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img src={power} alt="Power Station" className='w-full h-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl text-center font-bold">Please Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <small>
                                    You don't have an account? Please <NavLink to={"/register"} className='text-blue-800 underline'>register</NavLink>.
                                </small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;