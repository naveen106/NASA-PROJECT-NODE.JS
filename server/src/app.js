const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const app = express();

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

//CROSS_ORIGIN-POLICY- WHITELIST
app.use(cors({
   origin: 'http://localhost:3000'
}));

//logs some data for debugging purpose
app.use(morgan('combined'));

//PARSE ANY INCOMING REQUEST AS JSON OBJECT
app.use(express.json());
 
app.use('/launches',launchesRouter);
app.use('/planets', planetsRouter);

//path it will use to to run the website (frontend).
app.use(express.static(path.join(__dirname, '..', 'public', 'build')));

//if endpoint doesn't matches with any of our routes, express passes it on the react application on index.html (react will handle routing then).
app.use('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'public', 'build', 'index.html'));
});

module.exports = app;