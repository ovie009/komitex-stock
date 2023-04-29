import LandingPage from "./LandingPage";
import LogisticsInventory from '../logistics/LogisticsInventory';
import MerchantInventory from '../merchant/MerchantInventory';
import StaffInventory from '../staff/StaffInventory';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Inventory = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Logistics') {
        return <LogisticsInventory />
    } else if (accountType === 'Merchant') {
        return <MerchantInventory />
    } else if (accountType === 'Staff') {
        return <StaffInventory />
    } else {
        return <LandingPage />
    }
}

export default Inventory;