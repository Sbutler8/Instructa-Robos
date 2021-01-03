import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { addFunctionality } from '../../store/projects'
import { getFeatures } from "../../store/functionalities";
import  { moveEyes }  from '../LoginFormModal/LoginForm.js';
import './AddedFunctionalityForm.css';
import '../../context/Modal.css';

function AddFunctionalityForm({setShowModal, setNewFeature}) {

  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [vidPic, setVidPic] = useState(null);
  const [imgPreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addFunctionality({ name,code,vidPic, projectId}))
      //   dispatch(getFeatures(projectId))

      setShowModal(false);
      setVidPic(null);
    //   setNewFeature(true);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setVidPic(file);
        const fileReader = new FileReader();
        if (file) {
            fileReader.readAsDataURL(file);
        }
        fileReader.onloadend = () => {
            setImagePreview(fileReader.result);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className="eyebox-add-feature" >
            <div className="eye-add-feature" id="lefteye-add-feature"></div>
            <div className="eye-add-feature"id="righteye-add-feature"></div>
        </div>
        <img className="robotImg" src="../../images/editCode.png" alt='' />
        <label>Name:</label>
        <input id="name"
            placeholder="Description of Added Functionality"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <label>Code</label>
        <input id="code"
            placeholder="Added/Edited Code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
        />
        <img className="imgPreview" src={imgPreview} alt=''></img>
        <label  className="custom-file-upload">Upload Photo
            <input type="file" onChange={updateFile} />
        </label>
        <button id="addYourPiece" type="submit">Add Your Piece</button>
        <script>
        {document.querySelector('body').addEventListener('mousemove', moveEyes)}
        </script>
    </form>
  );
}

export default AddFunctionalityForm;
