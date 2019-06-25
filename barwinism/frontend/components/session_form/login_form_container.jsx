import SessionForm from "./session_form";
import React from 'react';
import { connect } from 'react-redux';
import { login } from "../../actions/session_actions";
import { Link } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: "login",
    link: <Link to="/signup">Click Here</Link>
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: (user) => dispatch(login(user))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);