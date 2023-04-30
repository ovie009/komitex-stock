import Reroute from "./Reroute";
import LogisticsDispatch from '../logistics/LogisticsDispatch';
import MerchantDispatch from '../merchant/MerchantDispatch';
import StaffDispatch from '../staff/StaffDispatch';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Dispatch = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsDispatch />
    } else if (accountType === 'Merchant') {
        return <MerchantDispatch />
    } else if (accountType === 'Staff') {
        return <StaffDispatch />
    } else {
        return <Reroute />
    }
}

export default Dispatch;