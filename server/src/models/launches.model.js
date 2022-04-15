const launchesMap = new Map();

const launch = {
   flightNumber: 100,
   mission:'Kepler Exploration X',
   rocket: 'Explorer IS1',
   launchDate: Date('April 30', '2021'),
   target: 'Kepler-442 b',
   customer: ['ZTM', 'NASA'],
   upcoming: true,
   success: true,
}

launchesMap.set(launch.flightNumber, launch);

let latestFlightNum = launch.flightNumber;

function addNewLaunch(launch) {
   latestFlightNum++;
   ///add this new launch object at latestFlightNum key, it will have specified properties too (through Object.assign()).
   launchesMap.set(latestFlightNum, Object.assign(launch, {
      flightNumber: latestFlightNum,
      customer: ['Raizel', 'NASA'],
      upcoming: true,
      success: true,
   }));
}


function doesLaunchIdExists(launchId) {
   if (launchesMap.has(launchId))
      return true;
   return false;
}

function abortLaunchWithId(launchId) {
   const abortedObject = launchesMap.get(launchId);
   abortedObject.upcoming = false;
   abortedObject.success = false;
   //launchesMap.delete(launchId);
   return abortedObject;
}


function getAllLaunches() {
   return Array.from(launchesMap.values());
}

module.exports = {getAllLaunches, addNewLaunch, doesLaunchIdExists, abortLaunchWithId};