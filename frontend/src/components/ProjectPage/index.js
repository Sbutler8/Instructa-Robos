import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { getProjects } from "../../store/projects";
import { getCategories } from "../../store/categories";
import './ProjectPage.css';
import NavigationBar from '../NavigationBar';

function ProjectPage() {
    const dispatch = useDispatch();
    useEffect(() => dispatch(getProjects()), [dispatch]);
    useEffect(() => dispatch(getCategories()), [dispatch]);

    const projects = useSelector((state) => state.projects);
    const categories = useSelector((state) => state.categories);

    const projectArray = Object.values(projects);
    const categoryArray = Object.values(categories);

  return (
    <>
      <NavigationBar />
      <div>Project Page</div>
    </>
  );
}

export default ProjectPage;
