import React from 'react';
import {NavLink} from 'react-router-dom';
import power from '../../assets/power-station.png';

const Registration = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-3/5">
                    <div className="text-center lg:text-left w-full lg:w-1/2">
                        <img src={power} alt="Power Station" className='w-full h-full' />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl text-center font-bold">Please Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <small>
                                    You already have an account? Please <NavLink to={"/login"} className='text-blue-800 underline'>login</NavLink>.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;