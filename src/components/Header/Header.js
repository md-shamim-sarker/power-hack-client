import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-between px-10 py-2 bg-slate-300 items-center'>
            <div className='flex items-center'>
                <img src={logo} alt="Logo" className='w-12 h-12' title='POWER' />
                <h2 className="text-3xl font-semibold">HACK</h2>
            </div>
            <div className='flex gap-5'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/billings"}>Billings</NavLink>
            </div>
            <div>
                <button className='btn btn-primary btn-sm'>Login</button>
            </div>
        </div>
    );
};

export default Header;