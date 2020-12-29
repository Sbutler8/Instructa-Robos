import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getCategories } from "../../store/categories";
import NavBar from '.';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getCategories()), [dispatch]);

    const categories = useSelector((state) => state.categories);
    // console.log(projects);
    const categoryArray = Object.values(categories);

  return (
    <>
      <div className="navBar">
        {categoryArray.map(category => {
          return (
              <div className="category">
                  <Link to={`/projects/${category.name}`} >
                      <div>{category.name}</div>
                  </Link>
              </div>
              )
          })}
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
          <span>instructarobos</span>
      </div>
    </>
  );
}

export default NavigationBar;
