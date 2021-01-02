import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginFormModal.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const moveEyes = (event) => {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(eye => {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = (radian * (100 / Math.PI) * -1) + 320;
      eye.style.transform = "rotate("+rotation+"deg)"
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="eyebox" >
        <div className="eye" id="lefteye"></div>
        <div className="eye"id="righteye"></div>
      </div>
      <img src="../../images/instructa-robos-logo.png" alt='' />
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <input id="username"
        placeholder="Username or Email"
        type="text"
        value={credential}
        onChange={(e) => setCredential(e.target.value)}
        required
      />
      <input id="password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="login" type="submit">Log In</button>
      <script>
        {document.querySelector('body').addEventListener('mousemove', moveEyes)}
      </script>
    </form>
  );
}

export default LoginForm;
