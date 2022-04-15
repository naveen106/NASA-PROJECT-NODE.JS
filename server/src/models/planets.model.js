// const planets = [];
// module.exports = planets;

const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');
const results = [];

function isHabitable(planet) {
   return planet['koi_disposition'] === "CONFIRMED" && planet['koi_insol'] <= 1.11 && planet['koi_insol'] >= 0.36 && planet['koi_prad'] < 1.6;
}

function loadHabitablePlanets() {
   
   //if I don't wrap the file-parsing code inside a promise, it will keep running asynchronously in the background
   //but our code execution doesn't stop. It will send empty planets array outside without any data, because file has not been parsed yet.
   //So by using Promise, we 'wait' for our 'csv' file to be parsed, and our 'results' array to be filled with correct data (habitable planets).
   //after everything is finished, client can work with data.

   //now if we require('planets.models.js'), this current code will execute and we will get the full array(data) to work on.
   //otherwise(without promise) no data is there to work upon.

   //wrapped inside Promise
   return new Promise( (resolve, reject) => {
      

      fs.createReadStream(path.join(__dirname,'..','..','data','KeplerData.csv'))
      .pipe(parse({
         comment: '#',
         columns: true,
      }))
      .on('data', data => {
         if (isHabitable(data))
            results.push(data);
      })
      .on('error', err => reject(err)) //on error, reject promise.
      .on('end', () => { //on end, resolve promise.
         resolve();
      });   

   })
}

function getAllPlanets() {
   return results;
}

module.exports = {
   loadHabitablePlanets,
   //planets: results,
   getAllPlanets,
};
