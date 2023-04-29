import { useState } from "react";
import axios from "axios";

const LogisticsHome = () => {

    // state to show or hide no inventory notice
    const [noInventory, setNoInventory] = useState( async() => {
        try {
            const data = {
                action: 'checkForInventory',
                company_id: JSON.parse(localStorage.getItem('company_id'))
            }
            const response = await axios.post('http://localhost/komitexstock/api/pages/logistics/home.php', data);
            // console.log(response.data.inventory);
            return response.data.inventory;
        } catch (error) {
            console.error(error);
            return error;
        }
    });

    console.log(noInventory)

    // const makePostRequest = async (postData) => {
    //     try {
    //         const response = await axios.post('http://localhost/komitexstock/api/pages/logistics/home.php', postData);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         return error;
    //     }
    // };

    return (
        <>
            <h2>Logistics Home</h2>

            {noInventory && <p>No Inventory</p>}

        </>
    );
}
 
export default LogisticsHome;

// import axios from 'axios';
// import { useState, useEffect } from 'react';

// function MyComponent() {
//   const [inventoryData, setInventoryData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const companyId = JSON.parse(localStorage.getItem('company_id'));
//         const response = await axios.get('http://localhost/komitexstock/api/pages/logistics/home.php', {
//           params: {
//             action: 'checkForInventory',
//             company_id: companyId
//           }
//         });
//         setInventoryData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     // JSX for your component
//   );
// }