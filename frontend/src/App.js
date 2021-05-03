import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Explore from './components/Explore';
import Photo from './components/Photo';
import Profile from './components/Profile';
import Albums from './components/Albums';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
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
            <Splash />
          </Route>
          <Route exact path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignUpFormPage />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path={`/photos/:id`}>
            <Photo />
          </Route>
          <Route exact path={`/profile/:id`}>
            <Profile />
          </Route>
          <Route exact path={`/profile/:id/albums`}>
            <Albums />
          </Route>
          {/* <Route path={`/profile/:id/albums/:albumId`}>
            <Album />
          </Route> */}
          <Route path='/'>
            <PageNotFound />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;