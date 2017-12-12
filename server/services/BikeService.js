const Bike = require('../models/BikeModel');
module.exports = {

	getBikeById: async (bikeId, fields) => {
		try {
			return await Bike.findById(bikeId).select(fields);
		} catch (err) {
			throw err;
		}
	},


	getBikeList: async () => {
		try {
			return await Bike.find({});
		} catch (err) {
			throw err;
		}
	},

	createBike: async (data) => {

		let newBike = {
			name: data.name,
			description: data.description,
			time: {
				bikeTime: data.bikeTime,
				bonusTime: data.bikeTime / 2
			},
			status: "INITIAL"
		};
		try {
			return await Bike.create(newBike);
		} catch (err) {
			throw err;
		}
	},

	updateBikeById: async (bikeId, data) => {
		let bikeToUpdate = {};
		if (data.name) {
			bikeToUpdate.name = data.name;
		}
		if (data.description) {
			bikeToUpdate.description = data.description;
		}
		if (data.status) {
			bikeToUpdate.status = data.status;
		}
		try {
			return await Bike.findByIdAndUpdate(
				{_id: bikeId},
				{
					$set: bikeToUpdate
				},
				{new: true});
		} catch (err) {
			throw err;
		}
	},

	removeBikeById: async (bikeId) => {
		try {
			return await Bike.remove({_id: bikeId});
		} catch (err) {
			throw err;
		}
	},

};
