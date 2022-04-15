
const {addNewLaunch, getAllLaunches, doesLaunchIdExists, abortLaunchWithId} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
   return res.status(200).send(getAllLaunches());   
}


//controller function to add a launch (post).
function httpAddLaunch(req, res) {
   const launch = req.body;

   if (!launch.mission || !launch.launchDate || !launch.rocket || !launch.target)
      return res.status(400).send({error: "Missing one or more requrired launch properties."})   

   launch.launchDate = new Date(launch.launchDate);

   if (isNaN(launch.launchDate))
      return res.status(400).send({error: "Invalid date"});

   launch.launchDate = new Date(launch.launchDate);
   addNewLaunch(launch);

   return res.status(201).json(launch);
}
 

function httpAbortLaunch(req, res) {
   const id = +req.params.id;   //get id from url params

   if (doesLaunchIdExists(id)) {    //if launch with provided id exists
      const object = abortLaunchWithId(id);
      return res.json(object); 
   } 
   else {
      return res.status(404).json({ error: `Launch not found` });
   }

}

module.exports = { httpGetAllLaunches, httpAddLaunch, httpAbortLaunch };