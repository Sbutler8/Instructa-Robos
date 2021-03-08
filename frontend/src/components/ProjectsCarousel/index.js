import React, { useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Link, useParams, Redirect } from "react-router-dom";
import { getAllCategoriesAndProjects } from "../../store/projects";
import './ProjectsCarousel.css';

function ProjectsCarouselPage({ category }) {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        dispatch(getAllCategoriesAndProjects())
    }, [dispatch]);

    const projects = useSelector((state) => state.projects);
    const user = useSelector((state) => state.session.user);

    const projectArray = Object.values(projects);

    if (!projects) {
        return null;
    }

    return (
        <div className="projects-carousel">
            {projectArray.map((project,i) => {
                return (
                    <div key={i} className="project-carousel">
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
