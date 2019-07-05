export const createTrack = (track) => {
  return $.ajax({
    method: "POST",
    url: "/api/tracks",
    data: {track}
  })
}

export const fetchTrack = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tracks/${id}`
  })
}

export const updateTrack = (track) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/tracks/${track.id}`,
    data: { track }
  })
}

export const fetchTracks = () => {
  return $.ajax({
    method: "GET",
    url: "/api/tracks"
  })
}