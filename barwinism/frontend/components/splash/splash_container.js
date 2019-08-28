import React from 'react';
import Splash from "./splash";

import { connect } from 'react-redux';
import { fetchNews } from "../../actions/splash_actions";


const mapStateToProps = state => {
  return ({
    news: Object.values(state.entities.splash)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchNews: () => dispatch(fetchNews()),
    clearNews: () => dispatch({type: "CLEAR_NEWS"})
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);