import React from 'react';
import GreetingContainer from "./greeting/greeting_container"
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
// begin testing
import SignupFormContainer from "./session_form/signup_form_container";
// end testing


const App = () => (
  <div>
    <header>
      <div className="h-top">
        <GreetingContainer />
      </div>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;