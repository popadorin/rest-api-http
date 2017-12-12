'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Bike Schema
 */
const BikeSchema = new Schema({
	name: String,
	description: String,
	status: String,
	time: {
		bikeTime: Number,
		bonusTime: Number,
	},
}, {
	timestamps: true
});


const Bike = mongoose.model('Bike', BikeSchema);
module.exports = Bike;
