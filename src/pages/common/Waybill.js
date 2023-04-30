import Reroute from "./Reroute";
import LogisticsWaybill from '../logistics/LogisticsWaybill';
import MerchantWaybill from '../merchant/MerchantWaybill';
import StaffWaybill from '../staff/StaffWaybill';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Waybill = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsWaybill />
    } else if (accountType === 'Merchant') {
        return <MerchantWaybill />
    } else if (accountType === 'Staff') {
        return <StaffWaybill />
    } else {
        return <Reroute />
    }
}

export default Waybill;