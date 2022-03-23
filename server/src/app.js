const express = require('express');
const cors = require('cors');
const app = express();

const planetsRouter = require('./routes/planets/planets.router');

//CROSS_ORIGIN-POLICY- WHITELIST
app.use(cors({
   origin: 'http://localhost:3000'
}));

//PARSE ANY INCOMING REQUEST AS JSON OBJECT
app.use(express.json());

app.use(planetsRouter);

module.exports = app;