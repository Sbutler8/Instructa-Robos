import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectDetails  } from "../../store/projects";
import { getFeatures } from "../../store/functionalities";
import './ProjectPage.css';
import NavigationBar from '../NavigationBar';
import { Modal } from '../../context/Modal';
import AddFunctionalityForm from '../AddFunctionalityFormModal/AddFunctionalityForm';

function ProjectPage() {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const { projectId } = useParams();

    useEffect(() => {
        dispatch(getFeatures(projectId))
    }, [projectId, dispatch]);

    useEffect(() => {
        dispatch(getProjectDetails(projectId))
    }, [projectId, dispatch]);


    const features = useSelector((state) => state.functionalities);
    const project = useSelector((state) => state.projects);

    const functionalityArray = Object.values(features);


    if (!project) {
        return null;
    }

    // const CPPFormat = code => {

    // }

    return (
    <>
        <NavigationBar />
        <div className="beginningProject">{project.name}</div>
        <pre>{project.code}</pre>
        <div>Intructions</div>
        <button onClick={() => {
            setShowModal(true)
            }}>Add Functionality</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <AddFunctionalityForm onClose={() => setShowModal(false)}/>
            </Modal>
        )}
        <div className="Features">
            {functionalityArray.map(feature => {
                return (
                    <div key={feature.id} className="feature">
                    <div >{feature.name}</div>
                    <div className="description">{feature.code}</div>
            </div>
               )
            })}
        </div>
    </>
    );
}

export default ProjectPage;
