import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname);

    if (loading) {
        return <div className="flex items-center justify-center md:h-[80vh]">
            <div>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
            </div>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;