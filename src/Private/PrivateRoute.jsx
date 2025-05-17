import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user , setexpLocation} = use(AuthContext)
    const location = useLocation()
    setexpLocation(location?.pathname);
    
    if (!user) {
        return <Navigate state={location?.pathname} to={'/auth/signin'}></Navigate>
    } return children;
};

export default PrivateRoute;