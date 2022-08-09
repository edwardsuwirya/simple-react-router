// Langkah
// 1. install dependency : npm install react-router-dom@6
// 2. mengkoneksikan aplikasi kita ke browser URL (index.js)
import Navigation from "./navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import LoginPageView from "./features/login/LoginPageView";
import ProtectedRoute from "./navigation/ProtectedRoute";
import MasterPageView from "./MasterPageView";
import BillPageView from "./features/bill/BillPageView";
import BillInfoView from "./features/bill/BillInfoView";
import {AuthProvider} from "./shared/hook/useAuth";
import React from "react";

/*
rem = “root em”, unit of measurement font size dari sebuah root element.
Artinya 1rem sama dengan font size dari html element, dimana browser" yang ada memiliki default 16px.
html {
font-size: 100%;
}

ul {
font-size: 0.75rem; //0.75 dari 16px = 12px
}
 */
function App() {
    return (
        <AuthProvider>
            <h1>WMB Point Of Sales</h1>
            <Routes>
                <Route index element={<LoginPageView/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="main" element={<Navigation/>}>
                        <Route path="master" element={<MasterPageView/>}/>
                        <Route path="bill" element={<BillPageView/>}>
                            <Route
                                index
                                element={
                                    <main style={{padding: "1rem"}}>
                                        <p>Select an invoice</p>
                                    </main>
                                }
                            />
                            <Route path=":billId" element={<BillInfoView/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>Oopss... page not found</p>
                        </main>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;
