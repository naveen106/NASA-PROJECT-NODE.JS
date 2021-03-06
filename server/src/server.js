const http = require('http');
const PORT = process.env.PORT || 8000;

const app = require('./app');
const server = http.createServer(app);
const { loadHabitablePlanets } = require('./models/planets.model');

async function startSever() {
   await loadHabitablePlanets();
   server.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}...`));
}

startSever();

/*
 const PORT = 8000;
 const http = require('http');
 const app = requrie('./app');
 const server = http.createServer(app);

 server.listen(PORT, ()=>console.log(`Listening on ${PORT}...`));

*/