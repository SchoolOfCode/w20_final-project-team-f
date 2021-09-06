import { React, useState } from 'react'
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './ProfileMenu.scss';
import { Menu, MenuItem, Avatar } from '@material-ui/core';

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
        setAnchorEl(null)
    }

    const handleSignOut = () => {
        auth.signOut()
    }

    return (

        <div className="profileMenu">
            <Avatar alt="Woman Avatar" src="/assets/princess.jpg" onClick={handleOpenProfileMenu} aria-controls="profile-menu" />
            <Menu style={{ marginTop: '50px' }} id="profile-menu" onClose={handleCloseProfileMenu} anchorEl={anchorEl} open={Boolean(anchorEl)} >
                <MenuItem onClick={handleCloseProfileMenu}>My Profile</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>Settings</MenuItem>
                <MenuItem onClick={handleCloseProfileMenu}>Contact</MenuItem>
                <MenuItem onClick={() => {
                    handleSignOut();
                    handleCloseProfileMenu();
                }}>Sign Out</MenuItem>
            </Menu>
        </div>

    );
}

export default ProfileMenu;
