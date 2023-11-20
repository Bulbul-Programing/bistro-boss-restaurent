import { useContext } from "react";
import AuthProvider, { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <p>loading....</p>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }}></Navigate>

};

export default PrivetRouter;