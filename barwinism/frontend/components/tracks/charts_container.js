import React from 'react';
import Charts from "./charts";

import { connect } from 'react-redux';
import { fetchTracks } from "../../actions/track_actions";


const mapStateToProps = state => {
  return({
    tracks: Object.values(state.entities.tracks)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTracks: () => dispatch(fetchTracks())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);