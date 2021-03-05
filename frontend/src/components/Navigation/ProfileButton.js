import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="dropdown">
      <button className="profile">
        <i className="fas fa-user-circle" />
      </button>
      <div className="dropdown-content">
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>
          <button id="logoutButton" onClick={logout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileButton;
