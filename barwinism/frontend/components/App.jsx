import React from 'react';
import GreetingContainer from "./greeting/greeting_container"
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from "./session_form/signup_form_container";
import TrackShowContainer from "./tracks/track_show_container";
import FooterContainer from "./footer/footer"
import CreateTrackContainer from "./tracks/create_track_container"

const App = () => (
  <div>   
    <GreetingContainer />
    <Switch>
      <ProtectedRoute exact path="/tracks/:trackId" component={TrackShowContainer}/>
      <ProtectedRoute exact path="/add-song" component={CreateTrackContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" render={()=>{}}/>
      <Redirect to="/"/>
    </Switch>
    <FooterContainer />
  </div>
);

export default App;