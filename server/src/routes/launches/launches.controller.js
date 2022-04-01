
const {addNewLaunch, getAllLaunches} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
 //  console.log(getAllLaunches());
   return res.status(200).send(getAllLaunches());   
} 

function httpAddLaunch(req, res) {
   const launch = req.body;

   if (!launch.mission || !launch.customer || !launch.rocket || !launch.destination || !launch.launchDate)
      return res.status(400).send({error: "Missing one or more requrired launch properties."})   

   launch.launchDate = new Date(launch.launchDate);

   if (isNaN(launch.launchDate))
      return res.status(400).send({error: "Invalid date"});

   launch.launchDate = new Date(launch.launchDate);
   addNewLaunch(launch);

   return res.status(201).json(launch);
}

module.exports = { httpGetAllLaunches, httpAddLaunch };