import { useContext } from "react";
import MerchantHome from "../merchant/MerchantHome";
import LogisticsHome from "../logistics/LogisticsHome";
import StaffHome from "../staff/StaffHome";
import { AccountTypeContext } from "../App";


const Home = () => {

    const accountType = useContext(AccountTypeContext);
    console.log(accountType);
    return (
        <>
            { accountType === 'Logistics' && <LogisticsHome /> }
            { accountType === 'Merchant' && <MerchantHome /> }
            { accountType === 'Staff' && <StaffHome /> }
        </>
    );
}
 
export default Home;