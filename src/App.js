import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useState } from "react";

// account type context
export const AccountTypeContext = createContext();

const App = () => {
    console.log(localStorage.getItem('account_type'));

    const [accountType, setAccountType] = useState(() => {
        const savedAccountType = localStorage.getItem('account_type');
        if (savedAccountType) {
            return JSON.parse(savedAccountType);
        } else {
            return '';
        }
    });

    return (
        <AccountTypeContext.Provider value={{accountType, setAccountType}}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={ <Layout /> }>
                    {/* home route */}
                    <Route index path="/" element={<Home />}></Route>
                    {/* home route */}
                    <Route path="/home" element={<Home />}></Route>
                    {/* signup route */}
                    <Route path="signup" element={<Signup />}></Route>
                    {/* login route */}
                    <Route path="login" element={<Login />}></Route>
                </Route>
                </Routes>
            </BrowserRouter>
        </AccountTypeContext.Provider>
    );
}
 
export default App