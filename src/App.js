import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useState } from "react";

// account type context
export const AccountTypeContext = createContext();

const App = () => {
    // account type state
    const [accountType] = useState('Staff');
    // eslint-disable-next-line
    // console.log(setAccountType);

    return (
        <AccountTypeContext.Provider value={accountType}>
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