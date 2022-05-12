require('dotenv').config();

const http = require('http');
const PORT = process.env.PORT || 4000;

const mongoose = require('mongoose');

//remember to keep .env file in root of your project for this to work.
const MONGO_URL = process.env.MONGO_URL;

const app = require('./app');
const server = http.createServer(app);

const { loadHabitablePlanets } = require('./models/planets.model');

//mongoose.connection is an event-emitter, so we can use once() and on() with it.
mongoose.connection.once('open', () => console.log("MongoDB connection established successfully!"));
mongoose.connection.on('error', error => console.error(error))

async function startSever() {

   const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
   };

   await mongoose.connect(MONGO_URL, options);
   await loadHabitablePlanets();

   server.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}...`));
}

startSever();