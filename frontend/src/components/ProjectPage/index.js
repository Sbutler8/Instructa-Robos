import React, { useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getProjectDetails  } from "../../store/projects";
import { getCategory } from "../../store/projects";
import { getFeatures } from "../../store/functionalities";
import './ProjectPage.css';
import { Modal } from '../../context/Modal';
import AddFunctionalityForm from '../AddFunctionalityFormModal/AddFunctionalityForm';

function ProjectPage() {
    const [showModal, setShowModal] = useState(false);
    const [newFeature, setNewFeature] = useState(false);

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
    const user = useSelector((state) => state.session.user);

    const functionalityArray = Object.values(features);

    function addLineNumbers (code) {
        console.log(typeof code)
        return code.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n')
    }

    if (!project) {
        return null;
    }

    if (!user) {
        return <Redirect to="/"/>;
    }

    // const CPPFormat = code => {

    // }

    return (
    <>
        <div className="projectName">{project.name}</div>
        <div className="projectAuthor" >By {user.username}</div>

        <pre className="code">{project.code}
            <button id="addFunctionalityButton" onClick={() => {
                setShowModal(true)
                }}>Add Functionality
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)} name="addFeature">
                    <AddFunctionalityForm setShowModal={setShowModal} setNewFeature={setNewFeature} />
                </Modal>
            )}
        </pre>
        { project.instructions &&
            <>
                <div className="instructions" >Instructions</div>
                <pre>{project.instructions}</pre>
            </>
        }
        <div className="Features">
            {functionalityArray.map(feature => {
                return (
                    <div key={feature.id} className="feature">
                    <div >{feature.name}</div>
                    <div className="description">{feature.code}</div>
                    <img className="uploadedImg" src={feature.vidPic}></img>
            </div>
               )
            })}
        </div>
    </>
    );
}

export default ProjectPage;
