import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = (children) => {//TODO:{children}
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className='progress w-56'></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    // https://github.com/remix-run/react-router/blob/dev/examples/auth/src/App.tsx
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;