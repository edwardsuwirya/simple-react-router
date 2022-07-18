let bills = [
    {
        id: "123",
        name: "Jasion",
        amount: "Rp.25,000",
        trxDate: "18/07/2022",
    },
    {
        id: "234",
        name: "Donei",
        amount: "Rp.34,000",
        trxDate: "18/07/2022",
    },
    {
        id: "345",
        name: "Fadley",
        amount: "Rp.12,500",
        trxDate: "19/07/2022",
    },
];

export function getBill() {
    return bills;
}

export function getBillById(id) {
    return bills.find(
        (bill) => bill.id === id
    );
}
