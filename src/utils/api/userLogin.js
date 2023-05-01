import { BASE_URL } from "./BASE_URL"
import axios from "axios"

const userLogin = async (data) => {
    try { 
        const response = await axios.post(`${BASE_URL}/common/login.php`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default userLogin