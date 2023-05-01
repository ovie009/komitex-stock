import { BASE_URL } from "../api/BASE_URL"
import axios from "axios"

const signupNewUser = async (data) => {
    try { 
        const response = await axios.post(`${BASE_URL}/${data.account_type}/signup.php`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default signupNewUser