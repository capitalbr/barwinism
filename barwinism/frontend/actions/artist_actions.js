
import * as ArtistAPIUtil from "../util/artist_util";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtist = (artist) => {
  return({
    type: RECEIVE_ARTIST,
    artist
  })
}

export const fetchArtist = (id) => {
  return dispatch => {
    return ArtistAPIUtil.fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
  }
}

