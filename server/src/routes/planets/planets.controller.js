
const planets = require(`../../models/planets.model`);

function getAllPlanets(req, res) {
  return res.send(planets);
}

module.exports = {
   getAllPlanets
}