import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;