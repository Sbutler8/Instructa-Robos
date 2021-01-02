import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getProjects } from "../../store/projects";
import { Link, Redirect } from 'react-router-dom';
import './UserHomePage.css';

function UserHomePage() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getProjects()), [dispatch]);

    const projects = useSelector((state) => state.projects);
    const user = useSelector((state) => state.session.user);

    const projectArray = Object.values(projects);

    if (!user) {
        return <Redirect to="/"/>;
    }

    return (
    <div className="projects">
        {projectArray.map(project => {
            return (
                <div key={project.id} className="project">
                    <img id="robotPic" src={project.robotPicURL} alt=''></img>
                    <Link to={`/projects/${project.id}`} >
                        <div >{project.name}</div>
                    </Link>
                    <div className="description">{project.description}</div>
                </div>
            )
        })}
    </div>
    );
  }

  export default UserHomePage;
