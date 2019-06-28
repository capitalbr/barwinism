
import * as AlbumAPIUtil from "../util/album_util";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

const receiveAlbum = (album) => {
  return ({
    type: RECEIVE_ALBUM,
    album
  })
}

export const fetchAlbum = (id) => {
  return dispatch => {
    return AlbumAPIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
  }
}