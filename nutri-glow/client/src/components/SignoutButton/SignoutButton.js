import React from 'react';
import { auth } from '../../firebase';


const SignoutButton = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>
                Sign Out</button>
        </div>
    );
}

export default SignoutButton;