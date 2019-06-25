import SessionForm from "./session_form";
import React from 'react';
import { connect } from 'react-redux';
import { signup } from "../../actions/session_actions"
import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return({
    errors: state.errors.session,
    formType: "signup",
    link: <Link to="/login">Click Here</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    processForm: (user) => dispatch(signup(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);