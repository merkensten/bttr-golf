import React from 'react';
import { signOut } from 'firebase/auth';
// import { auth, logout } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../context/AuthContext';

export function Navbar() {
  const navigate = useNavigate();

  const { logout } = UserAuth();

  async function logoutUser() {
    logout().then(() => {
      navigate('/');
    });
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
