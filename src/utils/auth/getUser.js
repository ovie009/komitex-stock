import { BASE_URL } from "../api/BASE_URL"
import axios from "axios"

const getUser = async (data) => {
    try { 
        const response = await axios.post(`${BASE_URL}/common/login.php`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default getUser