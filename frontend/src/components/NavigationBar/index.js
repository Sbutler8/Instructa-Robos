import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getCategories } from "../../store/categories";
import { getCategory } from "../../store/projects";
import { Link, useParams, useHistory } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const history = useHistory();
    useEffect(() => dispatch(getCategories()), [dispatch]);
    useEffect(() => dispatch(getCategory(projectId)), [dispatch]);

    const category = useSelector((state) => state.currentCategory);
    const categories = useSelector((state) => state.categories);
    const categoryArray = Object.values(categories);

    // if (typeof(projectId) === "number") {
    //   return (
    //     <div>{category}</div>
    //   )
    // } else {

    // }

  return (
    <>
      <div className="navBar">
        <div className="topNav">
          {categoryArray.map(category => {
            return (
                <div key={category.id} className="category">
                    <Link to={`/categories/${category.name}`} >
                        <div id="category">{category.name}</div>
                    </Link>
                </div>
                )
            })}
        </div>
        <div className="bottomNav">
          <img id="logo" src="../../images/instructa-robos-logo.png" alt=''/>
          <span id="text" >instructarobos</span>
          <button id="projectButton" onClick={() => history.push("/")}>Projects</button>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
