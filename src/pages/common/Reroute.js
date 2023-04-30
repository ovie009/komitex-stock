import { useContext } from "react";
import { AccountTypeContext } from "../../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Reroute = () => {

    const accountType = useContext(AccountTypeContext).accountType;
    const navigate = useNavigate();

    useEffect(() => {
        if (accountType === null) {
            // navigate to login page
            navigate("/login");
        } else {
            // navigate to home page
            navigate("/home");
        }
    })

    return (
        <span>
            Rerouting...
        </span>
    );
}
 
export default Reroute;