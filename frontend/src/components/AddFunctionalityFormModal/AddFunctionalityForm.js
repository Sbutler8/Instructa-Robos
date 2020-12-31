import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { addFunctionality } from '../../store/projects'
import './AddedFunctionalityForm.css';

function AddFunctionalityForm({setShowModal}) {

  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [vidPic, setVidPic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFunctionality({ name,code,vidPic, projectId}))

    setShowModal(false)
    };

  return (
    <form onSubmit={handleSubmit}>
      <div className="eyebox" >
        <div className="eye" id="lefteye"></div>
        <div className="eye"id="righteye"></div>
      </div>
      <img src="../../images/instructa-robos-logo.png" alt='' />
      {/* <ul>
        {console.log('ERRORS:',errors)}
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul> */}
      <input id="name"
        placeholder="Description of Added Functionality"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input id="code"
        placeholder="Added/Edited Code"
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button>Upload Picture/Video</button>
      <button type="submit">Add Your Piece</button>
    </form>
  );
}

export default AddFunctionalityForm;
