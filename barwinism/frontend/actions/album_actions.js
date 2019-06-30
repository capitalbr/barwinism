
import * as AlbumAPIUtil from "../util/album_util";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

const receiveAlbum = (album) => {
  return ({
    type: RECEIVE_ALBUM,
    album
  })
}

const receiveAlbums = (albums) => {
  return ({
    type: RECEIVE_ALBUMS,
    albums
  })
}

export const fetchAlbum = (id) => {
  return dispatch => {
    return AlbumAPIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
  }
}



export const fetchTrackAlbums = (trackId) => {
  return dispatch => {
    return AlbumAPIUtil.fetchTrackAlbums(trackId).then(albums => dispatch(receiveAlbums(albums)))
  }
}