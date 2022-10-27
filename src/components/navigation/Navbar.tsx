import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  async function logoutUser() {
    console.log('user logged out');
    await signOut(auth);
    navigate('/');
  }

  return (
    <div className="flex max-w-7xl mx-auto justify-between py-8 align-middle px-6">
      <h1>Navbar</h1>
      <div>
        <button className="btn" onClick={logoutUser}>
          Logga ut
        </button>
      </div>
    </div>
  );
}
