import React from 'react';
import { auth } from '../firebase';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <p><button onClick={() => auth.signOut()}>
        Sign Out</button></p>
    </div>

  );
}

export default Profile;
