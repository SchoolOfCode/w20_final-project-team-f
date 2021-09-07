import React from 'react'
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './ProfileMenu.scss';

// when user is logged in, display profile icon in navbar
// when clicked, profile icon should dropdown menu with options (i.e. edit profile, settings, logout, etc.)

const ProfileMenu = () => {
    return (
        <div className="dropdownBox">
            <div className="profile-icon">
                <a href="#" className="create-profile">
                    <img src="user.png" alt="user profile icon" />
                </a>
            </div>
            <div className="dropdownMenu">
                <ul>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li><li>
                        <a href="/login">Login</a>
                    </li>

                </ul>
            </div>

        </div>


    );
}

export default ProfileMenu;

{/* <p><button onClick={() => auth.signOut()}>Sign out</button></p> */ }


{/* <div onClick="userProfileToggle();" className="userProfile">
<img src="./user.png" alt="user profile icon" />
<div className="menu">
    <ul>
        <li><Link to="/signup" className="btn btn-primary">Sign Up</Link></li>
        <li><Link to="/signup" className="btn btn-primary">Log In</Link></li>
    </ul>
</div>

</div> */}