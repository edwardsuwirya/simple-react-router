import {Link, Outlet, useNavigate} from "react-router-dom";
import {useLocalStorage} from "../utils/hook/useLocalStorage";

const Navigation = () => {
    const navigate = useNavigate();
    const [value, setValue] = useLocalStorage('user')
    const onLogout = () => {
        setValue(null);
        navigate("/", {replace: true});
    }
    return (
        <>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/main/master">Master</Link> |{" "}
                <Link to="/main/bill">Customer's Bill</Link>
                <button onClick={onLogout}>Logout</button>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation;
