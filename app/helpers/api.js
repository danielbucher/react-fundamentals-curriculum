var axios = require('axios');

var _baseUrl = "http://api.openweathermap.org/data/2.5/";
var _APIKey = "4e868cd6ab8147f392ea311565c87c51";

var getUrl = (type, city) => {
  return _baseUrl + type;
};

var getParams = (city) => {
  return {
    q: encodeURIComponent(city),
    APPID: _APIKey,
    type: "accurate",
    cnt: 5
  }
};

var getWeather = (city) => {
  var url = getUrl("weather", city);
  var params = getParams(city);

  return axios.get(url, {
    params: params
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.warn(error);
  });
};

module.exports.getWeather = getWeather;
