export const fetchAlbum = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${id}`
  })
}

export const fetchTrackAlbums = (trackId) => {
  return $.ajax({
    method: "GET",
    url: `api/albums/${trackId}`
  })
}