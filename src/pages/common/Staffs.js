import LandingPage from "./LandingPage";
import LogisticsStaffs from '../logistics/LogisticsStaffs';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Staffs = () => {

    const accountType = useContext(AccountTypeContext).accountType

    // only logistics have a staff
    if (accountType === 'Logistics') {
        return <LogisticsStaffs />
    } else {
        return <LandingPage />
    }
}

export default Staffs;