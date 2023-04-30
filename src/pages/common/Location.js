import Reroute from "./Reroute";
import LogisticsLocation from '../logistics/LogisticsLocation';
import MerchantLocation from '../merchant/MerchantLocation';
import StaffLocation from '../staff/StaffLocation';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Location = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsLocation />
    } else if (accountType === 'Merchant') {
        return <MerchantLocation />
    } else if (accountType === 'Staff') {
        return <StaffLocation />
    } else {
        return <Reroute />
    }
}

export default Location;