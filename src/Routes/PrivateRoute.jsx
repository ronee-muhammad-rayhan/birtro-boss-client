/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <progress className='progress w-56'></progress>
    }

    if (user) {
        return children;
    }
    // https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;