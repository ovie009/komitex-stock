import LandingPage from "./LandingPage";
import LogisticsStock from '../logistics/LogisticsStock';
import MerchantStock from '../merchant/MerchantStock';
import StaffStock from '../staff/StaffStock';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Stock = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsStock />
    } else if (accountType === 'Merchant') {
        return <MerchantStock />
    } else if (accountType === 'Staff') {
        return <StaffStock />
    } else {
        return <LandingPage />
    }
}

export default Stock;