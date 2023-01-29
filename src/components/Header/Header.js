import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user-regular.svg';

const Header = () => {
    return (
        <div className='flex justify-between px-2 lg:px-10 py-2 bg-slate-300 items-center'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-12 h-12' title='POWER' />
                <h2 className="hidden lg:block text-3xl font-semibold">HACK</h2>
                <h2 className="lg:hidden text-3xl font-semibold">PH</h2>
            </div>
            <div className='flex gap-5'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/billings"}>Billings</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={user} alt="user" className='w-6 h-6' />
                <p className='text-lg font-semibold hidden lg:block'>Shamim Sarker</p>
                <NavLink to={"/login"} className='btn btn-primary btn-sm'>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;