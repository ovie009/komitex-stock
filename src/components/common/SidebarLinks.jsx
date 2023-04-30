import { useContext } from "react";
import { AccountTypeContext } from "../../App";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const SidebarLinks = ({setIsDrawerOpen}) => {

    const accountType = useContext(AccountTypeContext).accountType;
    const location = useLocation();

    const closeSideBar = () => {
        setIsDrawerOpen(false);
    }

    const handleLinks = () => {
        if (accountType === 'Logistics') {
            return logisticsLinks;
        } else if (accountType === 'Merchant') {
            return merchantLinks;
        } else if (accountType === 'Staff') {
            return staffLinks;
        } 
    }

    // logistics links
    const logisticsLinks = [
        {
            path: '/Home',
            page: 'Home',
            activeIcon: <HomeIcon />,
            inactiveIcon: <HomeOutlinedIcon />
        },
        {
            path: '/Waybill',
            page: 'Waybill',
            activeIcon: <LocalShippingIcon />,
            inactiveIcon: <LocalShippingOutlinedIcon />
        },
        {
            path: '/Dispatch',
            page: 'Dispatch',
            activeIcon: <SendIcon />,
            inactiveIcon: <SendOutlinedIcon />,
        },
        {
            path: '/Stock',
            page: 'Stock',
            activeIcon: <LocalGroceryStoreIcon />,
            inactiveIcon: <LocalGroceryStoreOutlinedIcon />
        },
        {
            path: '/Inventory',
            page: 'Inventory',
            activeIcon: <InventoryIcon />,
            inactiveIcon: <Inventory2OutlinedIcon />
        },
        {
            path: '/Location',
            page: 'Location',
            activeIcon: <LocationOnIcon />,
            inactiveIcon: <LocationOnOutlinedIcon />
        },
        {
            path: '/Analytics',
            page: 'Analytics',
            activeIcon: <LeaderboardIcon />,
            inactiveIcon: <LeaderboardOutlinedIcon />
        },
        {
            path: '/Staffs',
            page: 'Staffs',
            activeIcon: <PeopleIcon />,
            inactiveIcon: <PeopleAltOutlinedIcon />
        },
        {
            path: '/Activities',
            page: 'Activities',
            activeIcon: <AssignmentIcon />,
            inactiveIcon: <AssignmentOutlinedIcon />
        }
    ]

    // merchant links
    const merchantLinks = [
        {
            path: '/Home',
            page: 'Home',
            activeIcon: <HomeIcon />,
            inactiveIcon: <HomeOutlinedIcon />
        },
        {
            path: '/Waybill',
            page: 'Waybill',
            activeIcon: <LocalShippingIcon />,
            inactiveIcon: <LocalShippingOutlinedIcon />
        },
        {
            path: '/Dispatch',
            page: 'Dispatch',
            activeIcon: <SendIcon />,
            inactiveIcon: <SendOutlinedIcon />,
        },
        {
            path: '/Stock',
            page: 'Stock',
            activeIcon: <LocalGroceryStoreIcon />,
            inactiveIcon: <LocalGroceryStoreOutlinedIcon />
        },
        {
            path: '/Inventory',
            page: 'Inventory',
            activeIcon: <InventoryIcon />,
            inactiveIcon: <Inventory2OutlinedIcon />
        },
        {
            path: '/Location',
            page: 'Location',
            activeIcon: <LocationOnIcon />,
            inactiveIcon: <LocationOnOutlinedIcon />
        },
        {
            path: '/Analytics',
            page: 'Analytics',
            activeIcon: <LeaderboardIcon />,
            inactiveIcon: <LeaderboardOutlinedIcon />
        },
        {
            path: '/Team',
            page: 'Team',
            activeIcon: <PeopleIcon />,
            inactiveIcon: <PeopleAltOutlinedIcon />
        },
        {
            path: '/Activities',
            page: 'Activities',
            activeIcon: <AssignmentIcon />,
            inactiveIcon: <AssignmentOutlinedIcon />
        }
    ]

    // merchant links
    const staffLinks = [
        {
            path: '/Home',
            page: 'Home',
            activeIcon: <HomeIcon />,
            inactiveIcon: <HomeOutlinedIcon />
        },
        {
            path: '/Waybill',
            page: 'Waybill',
            activeIcon: <LocalShippingIcon />,
            inactiveIcon: <LocalShippingOutlinedIcon />
        },
        {
            path: '/Dispatch',
            page: 'Dispatch',
            activeIcon: <SendIcon />,
            inactiveIcon: <SendOutlinedIcon />,
        },
        {
            path: '/Stock',
            page: 'Stock',
            activeIcon: <LocalGroceryStoreIcon />,
            inactiveIcon: <LocalGroceryStoreOutlinedIcon />
        },
        {
            path: '/Inventory',
            page: 'Inventory',
            activeIcon: <InventoryIcon />,
            inactiveIcon: <Inventory2OutlinedIcon />
        },
        {
            path: '/Location',
            page: 'Location',
            activeIcon: <LocationOnIcon />,
            inactiveIcon: <LocationOnOutlinedIcon />
        },
        {
            path: '/Activities',
            page: 'Activities',
            activeIcon: <AssignmentIcon />,
            inactiveIcon: <AssignmentOutlinedIcon />
        }
    ]

    const links = handleLinks();

    return links.map((link) => {
        return ( 
            <Button 
                onClick={closeSideBar} 
                variant='text' 
                size='large' 
                startIcon={location.pathname === link.path ? link.activeIcon : link.inactiveIcon}
                key={link.page} 
                // color={"komitexLight.muted"}
                sx={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    // color: 'komitexLight.muted',
                    color: `${location.pathname === link.path ? "komitexLight.main" : "komitexLight.muted"}`,
                }}
            >
                <Link to={link.page}>{link.page}</Link>
            </Button>
        )
    });
}
 
export default SidebarLinks;