import { useContext } from "react";
import { AccountTypeContext } from "../../App";
import { Link } from "react-router-dom";
import { Button, MenuItem } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SendIcon from '@mui/icons-material/Send';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';

const SidebarLinks = ({setIsDrawerOpen}) => {

    const accountType = useContext(AccountTypeContext).accountType;

    const closeSideBar = () => {
        setIsDrawerOpen(false);
    }

    if (accountType === 'Logistics') {
        return (
            <>  
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<HomeIcon />} disableRipple>
                        <Link to="/home">HOME</Link>
                    </Button>
                </MenuItem>
                
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalShippingIcon />} disableRipple>
                        <Link to="/waybill">WAYBILL</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<SendIcon />} disableRipple>
                        <Link to="/dispatch">DISPATCH</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalGroceryStoreIcon />} disableRipple>
                        <Link to="/stock">STOCK</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<InventoryIcon />} disableRipple>
                        <Link to="/inventory">INVENTORY</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocationOnIcon />} disableRipple>
                        <Link to="/location">LOCATION</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<PeopleIcon />} disableRipple>
                        <Link to="/staffs">STAFFS</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<BarChartIcon />} disableRipple>
                        <Link to="/analytics">ANALYTICS</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<AssignmentIcon />} disableRipple>
                        <Link to="/activities">ACTIVITIES</Link>
                    </Button>
                </MenuItem>
            </>
        );
    } else if (accountType === 'Merchant') {
        return (
            <>  
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<HomeIcon />} disableRipple>
                        <Link to="/home">HOME</Link>
                    </Button>
                </MenuItem>
                
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalShippingIcon />} disableRipple>
                        <Link to="/waybill">WAYBILL</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<SendIcon />} disableRipple>
                        <Link to="/dispatch">DISPATCH</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalGroceryStoreIcon />} disableRipple>
                        <Link to="/stock">STOCK</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<InventoryIcon />} disableRipple>
                        <Link to="/inventory">INVENTORY</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocationOnIcon />} disableRipple>
                        <Link to="/location">LOCATION</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<PeopleIcon />} disableRipple>
                        <Link to="/teams">TEAM</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<BarChartIcon />} disableRipple>
                        <Link to="/analytics">ANALYTICS</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<AssignmentIcon />} disableRipple>
                        <Link to="/activities">ACTIVITIES</Link>
                    </Button>
                </MenuItem>
            </>
        )
    } else if (accountType === 'Staff') {
        return (
            <>  
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<HomeIcon />} disableRipple>
                        <Link to="/home">HOME</Link>
                    </Button>
                </MenuItem>
                
                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalShippingIcon />} disableRipple>
                        <Link to="/waybill">WAYBILL</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<SendIcon />} disableRipple>
                        <Link to="/dispatch">DISPATCH</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocalGroceryStoreIcon />} disableRipple>
                        <Link to="/stock">STOCK</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<InventoryIcon />} disableRipple>
                        <Link to="/inventory">INVENTORY</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<LocationOnIcon />} disableRipple>
                        <Link to="/location">LOCATION</Link>
                    </Button>
                </MenuItem>

                <MenuItem onClick={closeSideBar}>
                    <Button variant='text' size='large' startIcon={<AssignmentIcon />} disableRipple>
                        <Link to="/activities">ACTIVITIES</Link>
                    </Button>
                </MenuItem>
            </>
        )
    }
}
 
export default SidebarLinks;

// {/* <Link to="/" >Home</Link>
// <Link to="/activities">activities</Link>
// <Link to="/dispatch">dispatch</Link>
// <Link to="/inventory">inventory</Link>
// <Link to="/location">location</Link>
// <Link to="/report">report</Link>
// <Link to="/staffs">staffs</Link>
// <Link to="/stock">stock</Link>
// <Link to="/waybill">waybill</Link>
// <Link to="/teams">teams</Link> */}