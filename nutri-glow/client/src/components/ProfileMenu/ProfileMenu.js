import React from 'react'
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './ProfileMenu.scss';


const ProfileMenu = () => {

    function userProfileToggle() {
        const dropdownUserProfile = document.querySelector('.menu');
        dropdownUserProfile.classList.toggle('active')
    }



    return (
        <div onClick="userProfileToggle();" className="userProfile">
            <img src="./user.png" alt="user profile icon" />
            <div className="menu">
                <ul>
                    <li><Link to="/signup" className="btn btn-primary">Sign Up</Link></li>
                    <li><Link to="/signup" className="btn btn-primary">Log In</Link></li>
                </ul>
            </div>

        </div>


    );
}

export default ProfileMenu;

{/* <p><button onClick={() => auth.signOut()}>Sign out</button></p> */ }