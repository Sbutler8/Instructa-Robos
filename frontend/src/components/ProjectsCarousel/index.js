import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { getProjectsByCategory } from "../../store/projects";
import './ProjectsCarousel.css';

function ProjectsCarouselPage({ category }) {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        if (!categoryName) {
            console.log('CATEGORY', category)
            dispatch(getProjectsByCategory(category))
        } else {
            dispatch(getProjectsByCategory(categoryName))
        }
    }, [categoryName, dispatch]);

    const projects = useSelector((state) => state.projects);
    const user = useSelector((state) => state.session.user);

    const projectArray = Object.values(projects);

    if (!projects) {
        return null;
    }

    return (
        <div className="projects-carousel">
            {projectArray.map(project => {
                return (
                    <div key={project.id} className="project-carousel">
                        <img id="robotPic-carousel" src={project.robotPicURL} alt=''></img>
                        <Link to={`/projects/${project.id}`} >
                            <div >{project.name}</div>
                        </Link>
                        <div className="description-carousel">{project.description}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectsCarouselPage;
