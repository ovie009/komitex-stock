import { useContext } from "react";
import MerchantHome from "../accountType/merchant/MerchantHome";
import LogisticsHome from "../accountType/logistics/LogisticsHome";
import StaffHome from "../accountType/staff/StaffHome";
import NoUserHome from "../accountType/noUser/NoUserHome";
import { AccountTypeContext } from "../App";


const Home = () => {

    const accountType = useContext(AccountTypeContext);
    console.log(accountType);
    return (
        <>
            { accountType === 'Logistics' && <LogisticsHome /> }
            { accountType === 'Merchant' && <MerchantHome /> }
            { accountType === 'Staff' && <StaffHome /> }
            { accountType === '' && <NoUserHome /> }
        </>
    );
}
 
export default Home;