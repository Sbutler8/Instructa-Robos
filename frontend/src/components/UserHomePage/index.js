import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getProjects } from "../../store/projects";
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

function UserHomePage() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getProjects()), [dispatch]);

    const projects = useSelector((state) => state.projects);
    console.log(projects);
    const projectArray = Object.values(projects);

    return (
      <>
        <div className="projects">
            <div>User Home Page Here</div>
            {projectArray.map(project => {
                return <Link to={`/project/${project.id}`} >
                    <div>{project.name}</div>
                </Link>
            })}
        </div>
      </>
    );
  }

  export default UserHomePage;
