import { BASE_URL } from "../BASE_URL"
import axios from "axios"

const isLocationTableEmpty = async (company_id) => {
    try { 
        const response = await axios.post(`${BASE_URL}/logistics/location.php`, company_id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default isLocationTableEmpty;