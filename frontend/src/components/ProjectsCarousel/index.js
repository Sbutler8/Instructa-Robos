import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Link, useParams, Redirect } from "react-router-dom";
import { getAllCategoriesAndProjects } from "../../store/pairs";
import './ProjectsCarousel.css';

function ProjectsCarouselPage({ categoryId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategoriesAndProjects(categoryId))
    }, [categoryId])

    let projects = useSelector(state => state.pairs)

    const projectArray = Object.values(projects);

    if (!projects && !projectArray) {
        return null;
    }

    return (
        <div className="projects-carousel">
            {projectArray[categoryId-1] && projectArray[categoryId-1].map((project,i) => {
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
