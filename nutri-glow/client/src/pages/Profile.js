import React from 'react';
import { auth } from '../firebase';
import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
import SignoutButton from '../components/SignoutButton/SignoutButton';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <SignoutButton />
    </div>

  );
}

export default Profile;
