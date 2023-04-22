import { useNavigate } from "react-router-dom";

const useLoginRedirect = (session) => {
    
    const navigate = useNavigate();

    // if there is no session redirect to login page
    if (session) {
        navigate("/login");
    } 
}
 
export default useLoginRedirect;