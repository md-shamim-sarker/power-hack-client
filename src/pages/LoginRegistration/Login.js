import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';
import {toast} from 'react-hot-toast';
import {NavLink, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import power from '../../assets/power-station.png';
import {AuthContext} from '../../contexts/UserContext';

const Login = () => {
    const {render, setRender} = useContext(AuthContext);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        fetch('https://power-hack-server-three.vercel.app/api/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                const user = json.status;
                if(user === 'exist') {
                    localStorage.setItem("email", data.email);
                    setRender(!render);
                    navigate('/billings');
                    toast('Login success!');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'May be wrong email or password!',
                        footer: 'You can register a new account.'
                    });
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className='text-center bg-base-200 py-10'>
                <h2 className='text-2xl font-bold'>Sample Email and Password</h2>
                <p><span className='font-bold'>Email:</span> user@gmail.com; <span className='font-bold'>Password:</span> 123456</p>
            </div>
            <div className="hero bg-base-200">
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