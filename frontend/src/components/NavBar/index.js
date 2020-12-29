import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {

  return (
    <>
      <div className="navBar">
          <ul className="topNav">
            <li>Basics</li>
            <li>Digital</li>
            <li>Analog</li>
            <li>Communication</li>
            <li>Control</li>
            <li>Sensors</li>
            <li>Display</li>
            <li>Strings</li>
            <li>USB</li>
          </ul>
          <img id="logo" src="../../images/instructa-robos-logo.png" alt=''/>
          <span>instructables</span>
      </div>
    </>
  );
}

export default NavBar;
