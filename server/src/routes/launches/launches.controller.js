
const launchesMap = require('../../models/launches.model');

function httpGetAllLaunches(req, res, next) {
   //console.log(Array.from(launchesMap.values()));   
   res.status(200).send();
   next();
} 

module.exports = { httpGetAllLaunches };