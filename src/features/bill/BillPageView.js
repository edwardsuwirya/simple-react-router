import {getBill} from "../../services/BillService";
import {Link, Outlet} from "react-router-dom";
import {useAuth} from "../../utils/hook/useAuth";

export default function BillPageView() {
    let bills = getBill();
    return (
        <main style={{padding: "1rem 0"}}>
            <h2>Bill</h2>
            <div style={{display: "flex"}}>
                <nav
                    style={{
                        borderLeft: "solid 5px red",
                        padding: "1rem",
                        marginLeft: "0.5rem"
                    }}
                >
                    {bills.map((bill) => (
                        <Link
                            style={{display: "block", margin: "1rem 0"}}
                            to={`/main/bill/${bill.id}`}
                            key={bill.id}
                        >
                            {bill.id} - {bill.name}
                        </Link>
                    ))}
                </nav>
                <Outlet/>
            </div>
        </main>
    );
}
