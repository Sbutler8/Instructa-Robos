import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { getCategories } from "../../store/categories";
import { getCategory } from "../../store/projects";
import { Link, NavLink, useParams, useHistory } from 'react-router-dom';
import ProfileButton from '../Navigation/ProfileButton';
import { Modal } from '../../context/Modal';

import './NavigationBar.css';
import Carousel from '../Carousel';
import LoginFormModal from '../LoginFormModal';
import SignupFormPage from '../SignupFormPage';
import Footer from '../Footer';

function NavigationBar() {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const history = useHistory();

  useEffect(() => dispatch(getCategories()), [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const category = useSelector((state) => state.currentCategory);
  const categories = useSelector((state) => state.categories);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    if (sessionUser && projectId) {
      dispatch(getCategory(projectId))
    }
  }, [projectId, sessionUser, dispatch])


  const categoryArray = Object.values(categories);

  const linksToSpecificPointOnPage = () => {
    const categoryLinks = document.querySelectorAll(".category");
    const projectButton = document.querySelector("#projectButton");

    categoryLinks.forEach(category => {
      category.addEventListener("click", (event) => {
        category.setAttribute("href", event.target)
      })
    })
  }

  return (
    <>
      <div className="navBar">
        <div className="topNav">
          <div id="home-nav">
            {sessionUser && (
              <NavLink id="homeButton" exact to="/">
                <i className="fas fa-home"></i>
              </NavLink>
              )}
          </div>
          <div id="left-top-nav">
              {sessionUser &&
                categoryArray.map(category => {
                return (
                    <div key={category.id} className="category">
                        <Link to={`/categories/${category.name}`}>
                            <div id="category">{category.name}</div>
                        </Link>
                    </div>
                    )
                })}

              {!sessionUser &&
                categoryArray.map(category => {
                return (
                    <div key={category.id} className="category">
                        <Link href={`#${category.name}`} to='' onClick={() => window.location.replace(`#${category.name}`)}>
                            <div id="category">{category.name}</div>
                        </Link>
                    </div>
                    )
                })}
          </div>
          <div id="right-top-nav">
              {sessionUser && (
                <ProfileButton user={sessionUser}/>
              )}
          </div>
          {!sessionUser && (
            <div id="right-top-nav">
              <LoginFormModal />
              <button id="signUpButton" onClick={() => {
                setShowModal(true)
                }}>SignUp
              </button>
              {showModal && (
                <Modal onClose={() => setShowModal(false)} name="signUp">
                    <SignupFormPage setShowModal={setShowModal} />
                </Modal>
            )}
              {/* <NavLink to="/signup">Sign Up</NavLink> */}
            </div>
          )}
        </div>
        <div className="bottomNav">
          <img id="logo" src="../../images/instructa-robos-logo.png" alt=''/>
          <span id="text" >instructarobos</span>
          {/* {category && (
            <span>{category}</span>
          )} */}
          <button id="projectButton" onClick={() => history.push("/")}>Projects</button>
        </div>
        {!sessionUser && (
          <>
            <Carousel />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default NavigationBar;
