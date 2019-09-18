

export const fetchNews = () => {
  return $.ajax({
    url: `${window.azureEndpoint}/news?category=Entertainment_Music&mkt=en-us&originalImg=true`,
    headers: {
      'Ocp-Apim-Subscription-Key': window.azureKey,
      'X-Search-ClientIP': '192.168.0.20',
      'X-Search-Location': 'lat:47.60357;long:-122.3295;re:100',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'GET',
    dataType: 'json'
  });
}

