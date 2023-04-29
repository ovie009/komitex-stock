import LandingPage from "./LandingPage";
import LogisticsHome from '../logistics/LogisticsHome';
import MerchantHome from '../merchant/MerchantHome';
import StaffHome from '../staff/StaffHome';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Home = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsHome />
    } else if (accountType === 'Merchant') {
        return <MerchantHome />
    } else if (accountType === 'Staff') {
        return <StaffHome />
    } else {
        return <LandingPage />
    }
}

export default Home;