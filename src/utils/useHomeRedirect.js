import { useNavigate } from "react-router-dom";

const useHomeRedirect = (session) => {
    
    const navigate = useNavigate();

    // if there is a session redirect to / page
    if (session) {
        navigate("/");
    } 
}
 
export default useHomeRedirect;