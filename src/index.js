import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterPageView from "./MasterPageView";
import BillPageView from "./features/bill/BillPageView";
import BillInfoView from "./features/bill/BillInfoView";
import LoginPageView from "./features/login/LoginPageView";
import ProtectedRoute from "./navigation/ProtectedRoute";
import {AuthProvider} from "./utils/hook/useAuth";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route index element={<LoginPageView/>}/>
                    <Route element={<ProtectedRoute/>}>
                        <Route path="main" element={<App/>}>
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
        </BrowserRouter>
    </React.StrictMode>
);
