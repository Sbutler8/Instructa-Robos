import React, { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Link, useParams, Redirect } from "react-router-dom";
import { getProjectsByCategory } from "../../store/projects";
import './Categories.css';

function CategoriesPage({ category }) {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    // useEffect(() => dispatch(getProjects()), [dispatch]);

    useEffect(() => {
        if (!categoryName) {
            // dispatch(getProjectsByCategory(category))
        } else {
            dispatch(getProjectsByCategory(categoryName))
        }
    }, [categoryName, dispatch]);

    const projects = useSelector((state) => state.projects);
    const user = useSelector((state) => state.session.user);

    const projectArray = Object.values(projects);

    if (!user) {

        return <Redirect to="/"/>;
    }

    if (!projects) {
        return null;
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

export default CategoriesPage;
