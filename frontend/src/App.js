import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import SplashPage from './components/SplashPage';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import ExplorePage from './components/ExplorePage';
import PageNotFound from './components/PageNotFound';
import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <SplashPage />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignUpFormPage />
          </Route>
          <Route path='/explore'>
            <ExplorePage />
          </Route>
          <Route path='/'>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;