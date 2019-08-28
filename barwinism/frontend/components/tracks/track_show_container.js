import TrackShow from "./track_show";
import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack, updateTrack, fetchSongNews } from "../../actions/track_actions";
import { fetchArtist } from "../../actions/artist_actions";
import { fetchTrackAlbums } from "../../actions/album_actions"
import { Link } from "react-router-dom";
import { createAnnotation, updateAnnotation } from "../../actions/annotation_actions"


const mapStateToProps = (state, ownProps) => {
  let trackId = ownProps.match.params.trackId;
  
  let theTrack = state.entities.tracks[trackId];
 
    let artist;
    if (theTrack) {
      artist = state.entities.artists[theTrack.artist_id]
    } else {
      artist = null
    }

    let albums;
    if (theTrack) {
      albums = Object.values(state.entities.albums)
    } else {
      albums = null
    }

    let annotations;
    if (theTrack) {
      annotations = state.entities.annotations;
    } else {
      annotations = null
    }

  
  return ({
    track: state.entities.tracks[trackId],
    artist: artist,
    albums: albums,
    annotations: annotations,
    news: Object.values(state.entities.splash)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),
    updateTrack: (track) => dispatch(updateTrack(track)),
    updateAnnotation: (annotation) => dispatch(updateAnnotation(annotation)),
    fetchSongNews: (title) => dispatch(fetchSongNews(title))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);