'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
	name: String,
	description: String,
	status: String,
	time: {
		rentTime: Number
	},
}, {
	timestamps: true
});


const Bike = mongoose.model('Bike', BikeSchema);
module.exports = Bike;
