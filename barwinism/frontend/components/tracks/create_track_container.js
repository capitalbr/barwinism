import React from 'react';
import CreateTrack from "./create_track";

import { connect } from 'react-redux';
import { createTrack } from "../../actions/track_actions";


const mapDispatchToProps = (dispatch) => {
  return ({
    createTrack: (track) => dispatch(createTrack(track))
  })
}

export default connect(null, mapDispatchToProps)(CreateTrack);