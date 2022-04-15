const express = require('express');
const launchesRouter = express.Router();

const { httpGetAllLaunches, httpAddLaunch, httpAbortLaunch } = require('./launches.controller');

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;