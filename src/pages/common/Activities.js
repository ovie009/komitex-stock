import Reroute from "./Reroute";
import LogisticsActivities from '../logistics/LogisticsActivities';
import MerchantActivities from '../merchant/MerchantActivities';
import StaffActivities from '../staff/StaffActivities';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Activities = () => {

    const accountType = useContext(AccountTypeContext).accountType;

    if (accountType === 'Logistics') {
        return <LogisticsActivities />
    } else if (accountType === 'Merchant') {
        return <MerchantActivities />
    } else if (accountType === 'Staff') {
        return <StaffActivities />
    } else {
        return <Reroute />
    }
}

export default Activities;