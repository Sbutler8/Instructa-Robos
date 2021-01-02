import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { getProjectsByCategory } from "../../store/projects";
import './Categories.css';

function CategoriesPage() {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    // useEffect(() => dispatch(getProjects()), [dispatch]);

    useEffect(() => {
        dispatch(getProjectsByCategory(categoryName))
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


    // const CPPFormat = code => {

    // }

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
