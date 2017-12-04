/**
 * @module IndexRouter
 * @description IndexRouter is responsible for adding all the routes to the middleware chain of the app
 *
 */

let express = require('express');
let router = express.Router();

let dataRouter = require('./users');

module.exports = () => {
	router.use('/', dataRouter);

	return router;
};
