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
        <div className="topNav">
          {categoryArray.map(category => {
            return (
                <div className="category">
                    <Link to={`/projects/${category.name}`} >
                        <div id="category">{category.name}</div>
                    </Link>
                </div>
                )
            })}
        </div>
        <div className="bottomNav">
          <img id="logo" src="../../images/instructa-robos-logo.png" alt=''/>
          <span id="text" >instructarobos</span>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
