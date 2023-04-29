import LandingPage from "./LandingPage";
import LogisticsReport from '../logistics/LogisticsReport';
import MerchantReport from '../merchant/MerchantReport';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Report = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsReport />
    } else if (accountType === 'Merchant') {
        return <MerchantReport />
    } else {
        return <LandingPage />
    }
}

export default Report;