// export const fetchNews = () => {
//   return $.ajax({
//     method: "GET",
//     url: 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2019-08-17&' +
//           'sortBy=popularity&' +
//           'apiKey=111ec480d5024835b9ee1181457ab581'
    
//   })
// }

export const fetchNews = () => {
  return $.ajax({
    url: 'https://api.cognitive.microsoft.com/bing/v7.0/news?category=Entertainment_Music&mkt=en-us&originalImg=true',
    headers: {
      'Ocp-Apim-Subscription-Key': '0d472f890ed74def9881f0a76349f2e7',
      'User-Agent': 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822)',
      'X-Search-ClientIP': '192.168.0.20',
      'X-Search-Location': 'lat:47.60357;long:-122.3295;re:100',
      'Host': 'api.cognitive.microsoft.com',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-MSEdge-ClientID': '127431F38BA460F03E4A3C4F8A5961AB'
    },
    method: 'GET',
    dataType: 'json'
  });
}

