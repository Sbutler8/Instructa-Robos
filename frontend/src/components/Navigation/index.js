// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
// import NavigationBar from '../NavigationBar';
// import Carousel from '../Carousel';
// import './Navigation.css';

// function Navigation({ isLoaded }){
//   const sessionUser = useSelector(state => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <>
//         <ProfileButton user={sessionUser} />
//       </>
//     );
//   } else {
//     sessionLinks = (
//       <>
//         <Carousel />
//         <LoginFormModal />
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <>
//       <NavLink exact to="/">Home</NavLink>
//       {isLoaded && sessionLinks}
//     </>
//   );
// }

// export default Navigation;
