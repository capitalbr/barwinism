const keys = require('../../config/keys');

export const fetchNews = () => {
  return $.ajax({
    url: `${keys.azureEndpoint}/news?category=Entertainment_Music&mkt=en-us&originalImg=true`,
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

// export const fetchNews = () => {
//   return $.ajax({
//     url: 'https://api.cognitive.microsoft.com/bing/v7.0/news?category=Entertainment_Music&mkt=en-us&originalImg=true',
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

