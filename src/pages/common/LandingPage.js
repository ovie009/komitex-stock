import { useContext } from "react";
import { AccountTypeContext } from "../../App";


const LandingPage = () => {

    const accountType = useContext(AccountTypeContext).accountType;

    console.log(accountType);
    return (
        <>
            <h1>Landing Page</h1>
        </>
    );
}
 
export default LandingPage;