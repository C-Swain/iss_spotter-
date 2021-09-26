const request = require('request-promise-native');


const fetchMyIP = function() {
  return request('http://api.ipify.org/?format=json');
};


const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyoverTimes = function(body) {
  const coords = { latitude, longitude} = JSON.parse(body);

  const url = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyoverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation, fetchMyIP,fetchCoordsByIP, fetchISSFlyoverTimes };