import Reroute from "./Reroute";
import LogisticsAccount from '../logistics/LogisticsAccount';
import MerchantAccount from '../merchant/MerchantAccount';
import StaffAccount from '../staff/StaffAccount';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Account = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsAccount />
    } else if (accountType === 'Merchant') {
        return <MerchantAccount />
    } else if (accountType === 'Staff') {
        return <StaffAccount />
    } else {
        return <Reroute />
    }
}

export default Account;