import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
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
                <div className="instructions">Instructions</div>
                <pre className="instructionsText">{project.instructions}</pre>
            </>
        }
        <div className="features">
            {functionalityArray.map(feature => {
                return (
                    <div key={feature.id} className="feature">
                        <div className="featureTitle">{feature.name}</div>
                        <img className="uploadedImg" src={feature.vidPic} alt=''></img>
                        {/* <textarea>Code Changes</textarea> */}
                        <div className="description">{feature.code}</div>
                    </div>
               )
            })}
        </div>
    </>
    );
}

export default ProjectPage;
