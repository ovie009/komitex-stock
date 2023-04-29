import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from "./pages/common/Activities";
import Dispatch from "./pages/common/Dispatch";
import Home from "./pages/common/Home";
import Inventory from "./pages/common/Inventory";
import Layout from './pages/common/Layout';
import Location from './pages/common/Location'
import Login from './pages/common/Login';
import Report from './pages/common/Report';
import Signup from './pages/common/Signup';
import Staffs from './pages/common/Staffs';
import Stock from './pages/common/Stock';
import Waybill from './pages/common/Waybill';
import Teams from './pages/common/Teams';
import { createContext, useState } from "react";

// account type context
export const AccountTypeContext = createContext();

const App = () => {
    // console.log(localStorage.getItem('account_type'));
    localStorage.setItem('account_type', JSON.stringify('Logistics'));

    const [accountType, setAccountType] = useState(() => {
        const savedAccountType = localStorage.getItem('account_type');
        return JSON.parse(savedAccountType);
    });

    return (
        <AccountTypeContext.Provider value={{accountType, setAccountType}}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={ <Layout /> }>
                    {/* home route */}
                    <Route path="/" index element={ <Home /> } />
                    <Route path="home" element={ <Home /> } />
                    {/* activities route */}
                    <Route path="activities" element={ <Activities /> } />
                    {/* dispatch route */}
                    <Route path="dispatch" element={ <Dispatch /> } />
                    {/* inventory route */}
                    <Route path="inventory" element={ <Inventory /> } />
                    {/* location route */}
                    <Route path="location" element={ <Location /> } />
                    {/* report route */}
                    <Route path="report" element={ <Report /> } />
                    {/* staffs route */}
                    <Route path="staffs" element={ <Staffs /> } />
                    {/* stock route */}
                    <Route path="stock" element={ <Stock /> } />
                    {/* signup route */}
                    <Route path="signup" element={<Signup />} />
                    {/* waybill route */}
                    <Route path="waybill" element={<Waybill />} />
                    {/* login route */}
                    <Route path="login" element={<Login />} />
                    {/* teams route */}
                    <Route path="teams" element={<Teams />} />
                </Route>
                </Routes>
            </BrowserRouter>
        </AccountTypeContext.Provider>
    );
}
 
export default App