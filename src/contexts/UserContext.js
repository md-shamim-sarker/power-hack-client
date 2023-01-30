import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [account, setAccount] = useState('');
    const [loading, setLoading] = useState(true);
    const [render, setRender] = useState(true);

    const localStorageUser = localStorage.getItem('email');

    useEffect(() => {
        setAccount(localStorageUser);
    }, [localStorageUser]);

    const authInfo = {
        account,
        setAccount,
        setRender,
        render,
        loading,
        setLoading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;