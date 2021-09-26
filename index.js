// followed along with the lighthouse labs instructions. added some klingon for interest
const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("lujpu' Hoch mlw!" , error);
    return;
  }

  console.log('Qapla! Returned IP:' , ip);
});

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('107.179.173.67', (error, coordinates) => {
  if (error) {
    console.log("pe'vil niD, 'a Qapbe'" , error);
    return;
  }

  console.log(`It worked! wo'batlhvad!:` , coordinates);
});

const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Qapla!! Returned the flyover times:' , passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(` ISS will pass by at ${datetime} for ${duration}seconds!`);
  }
};

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

module.exports = printPassTimes;