import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useState } from "react";

const App = () => {

    // account type context
    const AccountTypeContext = createContext();

    // account type state
    const [accountType, setAccountType] = useState('logistics');

    return (
        <AccountTypeContext.Provider value={{ accountType}}>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={ <Layout /> }>
                    {/* home route */}
                    <Route index path="/" element={<Home />}></Route>
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