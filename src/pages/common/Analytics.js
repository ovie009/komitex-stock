import Reroute from "./Reroute";
import LogisticsAnalytics from '../logistics/LogisticsAnalytics';
import MerchantAnalytics from '../merchant/MerchantAnalytics';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Analytics = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsAnalytics />
    } else if (accountType === 'Merchant') {
        return <MerchantAnalytics />
    } else {
        return <Reroute />
    }
}

export default Analytics;