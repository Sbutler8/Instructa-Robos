import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectDetails } from "../../store/projects";
import './ProjectPage.css';
import NavigationBar from '../NavigationBar';

function ProjectPage() {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    console.log(projectId)

    useEffect(() => {
        dispatch(getProjectDetails(projectId))
    }, [projectId, dispatch]);

    const project = useSelector((state) => state.projects[projectId]);

    // const projectArray = Object.values(projects);

  return (
    <>
      <NavigationBar />
      <div>{project.name}</div>
      <div>{project.code}</div>
    </>
  );
}

export default ProjectPage;
