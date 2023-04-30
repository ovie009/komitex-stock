import Reroute from "./Reroute";
import MerchantTeams from '../merchant/MerchantTeams';
import { useContext } from "react";
import { AccountTypeContext } from "../../App";

const Teams = () => {

    const accountType = useContext(AccountTypeContext).accountType

    if (accountType === 'Merchant') {
        return <MerchantTeams />
    } else {
        return <Reroute />
    }
}

export default Teams;