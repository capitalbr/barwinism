const keys = require('../../config/keys');

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

export const fetchSongNews = (title) => {
  return $.ajax({
    url: `${keys.azureEndpoint}/news/search?q=${title}&mkt=en-us&originalImg=true`,
    headers: {
      'Ocp-Apim-Subscription-Key': keys.azureKey,
      'X-Search-ClientIP': '192.168.0.20',
      'X-Search-Location': 'lat:47.60357;long:-122.3295;re:100',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'X-MSEdge-ClientID': '127431F38BA460F03E4A3C4F8A5961AB'
    },
    method: 'GET',
    dataType: 'json'
  });
}

// export const fetchSongNews = (title) => {
//   return $.ajax({
//     url: `https://api.cognitive.microsoft.com/bing/v7.0/news/search?q=${title}&mkt=en-us&originalImg=true`,
//     headers: {
//       'Ocp-Apim-Subscription-Key': '0d472f890ed74def9881f0a76349f2e7',
//       'X-Search-ClientIP': '192.168.0.20',
//       'X-Search-Location': 'lat:47.60357;long:-122.3295;re:100',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'X-MSEdge-ClientID': '127431F38BA460F03E4A3C4F8A5961AB'
//     },
//     method: 'GET',
//     dataType: 'json'
//   });
// }