import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UserHomePage from "./components/UserHomePage";
import ProjectPage from "./components/ProjectPage";
import CategoriesPage from "./components/CategoriesPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route exact path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/">
          <UserHomePage />
        </Route>
        <Route path="/projects/:projectId">
          <ProjectPage />
        </Route>
        <Route path="/categories/:categoryName">
          <CategoriesPage />
        </Route>
      </Switch>
    )}
  </>
);
}

export default App;
