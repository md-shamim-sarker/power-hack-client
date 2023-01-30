import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import usericon from '../../assets/user-regular.svg';
import {AuthContext} from '../../contexts/UserContext';

const Header = () => {
    const {account, render, setRender} = useContext(AuthContext);
    const [loginUser, setLoginUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        setLoginUser(account);
    }, [account, render]);

    const logoutHandler = () => {
        localStorage.setItem("email", '');
        setRender(!render);
        navigate('/');
    };

    return (
        <div className='flex justify-between px-2 lg:px-10 py-2 bg-slate-300 items-center'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-12 h-12' title='POWER' />
                <h2 className="hidden lg:block text-3xl font-semibold">HACK</h2>
                <h2 className="lg:hidden text-3xl font-semibold">PH</h2>
            </div>
            <div className='flex gap-5 text-md font-bold'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={account === '' ? '/login' : '/billings'}>Billings</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={usericon} alt="user" className='w-6 h-6' />
                <p className='text-lg font-semibold hidden lg:block'>{loginUser}</p>
                {
                    loginUser === ''
                        ? <NavLink to={"/login"} className='btn btn-primary btn-sm'>Login</NavLink>
                        : <button onClick={logoutHandler} className='btn btn-primary btn-sm'>Logout</button>
                }
            </div>
        </div>
    );
};

export default Header;