import {useParams} from "react-router-dom";
import {getBillById} from "./BillService";

export default function BillInfoView() {
    let params = useParams();
    let bill = getBillById(params.billId);
    return (
        <main style={{padding: "1rem"}}>
            <h2>Bill : {bill.id}</h2>
            <p>Nama : {bill.name}, Date : {bill.trxDate}</p>
            <p>Amount: {bill.amount}</p>
        </main>
    )
}
