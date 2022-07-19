import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../utils/hook/useAuth";

const ProtectedRoute = () => {
    const auth = useAuth('route')
    return auth ? <Outlet/> : <Navigate to='/' replace/>;
};

export default ProtectedRoute;
