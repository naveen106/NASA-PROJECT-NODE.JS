const express = require('express');
const launchesRouter = express.Router();

const { httpGetAllLaunches, httpAddLaunch } = require('./launches.controller');

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddLaunch);

module.exports = launchesRouter;