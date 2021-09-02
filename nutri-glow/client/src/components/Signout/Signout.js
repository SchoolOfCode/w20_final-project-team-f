import React from 'react'
import { auth } from '../../firebase';


const Signout = () => {
    return (
        <p><button onClick={() => auth.signOut()}>Sign out</button></p>
    );
}

export default Signout;