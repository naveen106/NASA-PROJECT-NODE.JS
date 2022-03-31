const { getAllPlanets } = require("../../models/planets.model");

function httpGetAllPlanets(req, res) {

  return res.send(getAllPlanets());
  
}

module.exports = {
   httpGetAllPlanets
}