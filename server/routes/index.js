/**
 * @module IndexRouter
 * @description IndexRouter is responsible for adding all the routes to the middleware chain of the app
 *
 */

let express = require('express');
let router = express.Router();

let taskRouter = require('./task');

module.exports = () => {
	router.use('/', taskRouter);

	return router;
};
