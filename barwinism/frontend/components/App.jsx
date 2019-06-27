import React from 'react';
import GreetingContainer from "./greeting/greeting_container"
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
// begin testing
import SignupFormContainer from "./session_form/signup_form_container";
// end testing


const App = () => (
  <div>   
    <GreetingContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" render={()=>{}}/>
      <Redirect to="/"/>
    </Switch>
    
  </div>
);

export default App;