/**
 * @module BikeController
 * @description This module contains methods which extracts the required parameters from the request and forwards them onto the corresponding service layer and return back the result.
 */

const BikeService = require('./../services/BikeService');
const logger = require('../config/logger.js');


module.exports = {

	getBikeById: async (req, res) => {
		let bikeId = req.params.bikeId;
		let fields = req.query.fields;
		try {
			let bike = await BikeService.getBikeById(bikeId, fields);
			res.format({
				'text/plain': function () {
					res.status(200).send(bike);
				},

				'text/html': function () {
					res.status(200).send(`<p>${bike}</p>`);
				},

				'application/json': function () {
					res.status(200).json(bike);
				},

				'default': function () {
					res.status(406).send('Not Acceptable');
				}
			});
		} catch (err) {
			logger.error('BikeController.getBike(): ', err);
			res.status(500).json(err);
		}
	},

	getBikeList: async (req, res) => {
		try {
			let bikes = await BikeService.getBikeList();
			res.format({
				'text/plain': function () {
					res.status(200).send(bikes);
				},

				'text/html': function () {
					res.status(200).send(`<p>${bikes}</p>`);
				},

				'application/json': function () {
					res.status(200).json(bikes);
				},

				'default': function () {
					res.status(406).send('Not Acceptable');
				}
			});
		} catch (err) {
			logger.error('BikeController.getBikeList(): ', err);
			res.status(500).json(err);
		}
	},

	createBike: async (req, res) => {
		let requestData = {
			name: req.body.name,
			description: req.body.description,
			bikeTime: req.body.bikeTime
		};
		try {
			let bike = await BikeService.createBike(requestData);
			res.format({
				'text/plain': function () {
					res.status(200).send(bike);
				},

				'text/html': function () {
					res.status(200).send(`<p>${bike}</p>`);
				},

				'application/json': function () {
					res.status(200).json(bike);
				},

				'default': function () {
					res.status(406).send('Not Acceptable');
				}
			});
		} catch (err) {
			logger.error('BikeController.createBike(): ', err);
			res.status(500).json(err);
		}
	},

	updateBike: async (req, res) => {
		let bikeId = req.params.bikeId;
		let updatedData = {
			name: req.body.name,
			description: req.body.description,
			status: req.body.status
		};
		try {
			let bike = await BikeService.updateBikeById(bikeId, updatedData);
			res.format({
				'text/plain': function () {
					res.status(200).send(bike);
				},

				'text/html': function () {
					res.status(200).send(`<p>${bike}</p>`);
				},

				'application/json': function () {
					res.status(200).json(bike);
				},

				'default': function () {
					res.status(406).send('Not Acceptable');
				}
			});
		} catch (err) {
			logger.error('BikeController.updateBike(): ', err);
			res.status(500).json(err);
		}
	},

	deleteBike: async (req, res) => {
		let bikeId = req.params.bikeId;
		try {
			let bikes = await BikeService.removeBikeById(bikeId);
			res.status(200).json(bikes);
		} catch (err) {
			logger.error('BikeController.deleteBike(): ', err);
			res.status(500).json(err);
		}
	},

};
