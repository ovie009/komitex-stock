import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
        </>
    );
}
 
export default Layout;