import {Link, Outlet} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";

const Navigation = () => {
    const {logout} = useAuth();
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
                <button onClick={logout}>Logout</button>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigation;
