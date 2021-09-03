import React from 'react';
import { auth } from '../../firebase';

// signout button for user to log out of account
// when user click signout button, users credential is logged out from firebase database

const SignoutButton = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                Sign Out</button>
        </div>
    );
}

export default SignoutButton;