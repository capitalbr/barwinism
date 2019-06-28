import TrackShow from "./track_show";
import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from "../../actions/track_actions";
import { fetchArtist } from "../../actions/artist_actions";
import { fetchAlbum } from "../../actions/album_actions"
import { Link } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  
  let theTrack = state.entities.tracks[trackId];
 
    let artist;
    if (theTrack) {
      artist = state.entities.artists[theTrack.artist_id]
    } else {
      artist = null
    }

    let album;
    if (theTrack) {
      album = state.entities.albums[theTrack.album_id]
    } else {
      album = null
    }

  
  return ({
    track: state.entities.tracks[trackId],
    artist: artist,
    album: album
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);