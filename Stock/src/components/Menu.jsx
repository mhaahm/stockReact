import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharp from '@mui/icons-material/HomeSharp'
import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Inventory from '@mui/icons-material/Inventory';
import Article from '@mui/icons-material/Article';
import SpeakerNotes from '@mui/icons-material/SpeakerNotes';
import { NavLink } from 'react-router-dom'

export default function MenuStock() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );


    return (
           <Box sx={{flexGrow: 1}}>
               <AppBar position="fixed">
                   <Toolbar>
                       <IconButton
                           size="large"
                           edge="start"
                           color="inherit"
                           aria-label="open drawer"
                           sx={{mr: 2}}
                       >
                           <MenuIcon/>
                       </IconButton>
                       <HomeSharp/>
                       <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                           <NavLink to={'/'}  className={({ isActive, isPending }) =>
                               isActive
                                   ? "active"
                                   : isPending
                                       ? "pending"
                                       : ""
                           } > Home </NavLink>
                       </Typography>
                       <Box sx={{width: 20}}/>
                       <Dashboard/>
                       <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                           Dashboard
                       </Typography>
                       <Box sx={{width: 20}}/>
                       <Inventory/>
                       <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                           <NavLink to={'/stock'}> Inventory </NavLink>
                       </Typography>


                       <Box sx={{width: 20}}/>
                       <Article/>
                       <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                           CV Builder
                       </Typography>
                       <Box sx={{width: 20}}/>
                       <SpeakerNotes/>
                       <Typography
                           variant="h6"
                           noWrap
                           component="div"
                           sx={{display: {xs: 'none', sm: 'block'}}}
                       >
                           <NavLink to={'/myNote'}  className={({ isActive, isPending }) =>
                               isActive
                                   ? "active"
                                   : isPending
                                       ? "pending"
                                       : ""
                           } > My Notes </NavLink>
                       </Typography>
                       <Box sx={{flexGrow: 1}}/>
                       <Box sx={{display: {xs: 'none', md: 'flex'}}}>

                           <IconButton
                               size="large"
                               edge="end"
                               aria-label="account of current user"
                               aria-controls={menuId}
                               aria-haspopup="true"
                               onClick={handleProfileMenuOpen}
                               color="inherit"
                           >
                               <AccountCircle/>
                           </IconButton>
                       </Box>
                       <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                           <IconButton
                               size="large"
                               aria-label="show more"
                               aria-haspopup="true"
                               onClick={handleMobileMenuOpen}
                               color="inherit"
                           >
                               <MoreIcon/>
                           </IconButton>
                       </Box>
                   </Toolbar>
               </AppBar>
               {renderMenu}
           </Box>
    );
}