import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProjectsByCategory } from "../../store/categories";
import './Categories.css';
import NavigationBar from '../NavigationBar';

function CategoriesPage() {
    const dispatch = useDispatch();
    const { categoryName } = useParams();

    useEffect(() => {
        dispatch(getProjectsByCategory(categoryName))
    }, [categoryName, dispatch]);

    const project = useSelector((state) => state.projects);
    console.log(project)

    if (!project) {
        return null;
    }

    // const CPPFormat = code => {

    // }

    return (
    <>
        <NavigationBar />
        <div>{project.name}</div>
        <pre>{project.code}</pre>
    </>
    );
}

export default CategoriesPage;
