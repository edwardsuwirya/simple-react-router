import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MasterPageView from "./MasterPageView";
import BillPageView from "./BillPageView";
import BillInfoView from "./BillInfoView";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="master" element={<MasterPageView/>}/>
                    <Route path="bill" element={<BillPageView/>}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":billId" element={<BillInfoView/>}/>
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
        </BrowserRouter>
    </React.StrictMode>
);
