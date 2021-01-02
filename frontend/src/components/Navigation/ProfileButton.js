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
        <a>{user.username}</a>
        <a>{user.email}</a>
        <a>
          <button id="logoutButton" onClick={logout}>Log Out</button>
        </a>
      </div>
    </div>
  );
}

export default ProfileButton;
