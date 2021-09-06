import { React, useState } from 'react'
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './ProfileMenu.scss';
import { Menu, MenuItem } from '@material-ui/core';

import "./ProfileMenu.scss"

// when user is logged in, display profile icon in navbar
// when clicked, profile icon should dropdown menu with options (i.e. edit profile, settings, logout, etc.)

const ProfileMenu = () => {

    // state for profile menu drop down positioning
    const [anchorEl, setAnchorEl] = useState(null);

    const [active, setActive] = useState("signoutButton")

    // target profile menu click
    const handleOpenProfileMenu = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloseProfileMenu = () => {
        setAnchorEl(null);
    }



    return (

        <div className="profileMenu">

            <button onClick={handleOpenProfileMenu} aria-controls="profile-menu">Profile</button>

            <Menu id="profile-menu" onClose={handleCloseProfileMenu} anchorEl={anchorEl} open={Boolean(anchorEl)} >
                <MenuItem onClick={handleCloseProfileMenu}>My Profile</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>Settings</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>Contact</MenuItem>
                <MenuItem onClick={() => auth.signOut()}>Sign Out</MenuItem>
            </Menu>
        </div>

    );
}

export default ProfileMenu;
