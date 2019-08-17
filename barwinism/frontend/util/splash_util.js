export const fetchNews = () => {
  return $.ajax({
    method: "GET",
    url: 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2019-08-17&' +
          'sortBy=popularity&' +
          'apiKey=111ec480d5024835b9ee1181457ab581';
    
  })
}

