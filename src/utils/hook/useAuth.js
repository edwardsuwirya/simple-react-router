import {createContext, useContext} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
    const login = (data) => {
        setUser(data);
        navigate("/main", {replace: true});
    };

    const logout = () => {
        setUser(null);
        navigate("/", {replace: true});
    };
    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
