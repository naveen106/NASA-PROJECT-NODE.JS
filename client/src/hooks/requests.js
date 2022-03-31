const apiUrl = `http://localhost:8000`;
async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const planets = await fetch(`${apiUrl}/planets`);  
  return await planets.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.

  const response = await fetch(`${apiUrl}/launches`);
  const fetchedLaunches = await response.json();

  fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
  return fetchedLaunches;
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};