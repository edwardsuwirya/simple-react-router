import {Link, Outlet, useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        localStorage.removeItem('user');
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
