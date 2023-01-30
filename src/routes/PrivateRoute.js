import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const PrivateRoute = () => {
    const {account} = useContext(AuthContext);
    if(account === '') {
        return <Navigate to={"/login"}></Navigate>;
    } else {
        return <Navigate to={"/billings"}></Navigate>;
    }
};

export default PrivateRoute;