import { Navigate, useLocation } from "react-router-dom";
import UseContext from "../Hooks/UseContext";
const PrivateRoutes = ({children}) => {
    const{user , loading } = UseContext()
    const location = useLocation()
    

    if (loading) {
        return
    }
    if (!user) {
        return <Navigate to="/signIn" state={location?.pathname || "/"} ></Navigate>
    }
    return (
        <div>
           {
            children
           } 
        </div>
    );
};

export default PrivateRoutes;