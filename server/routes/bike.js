const express = require('express');
const router = express.Router();

const BikeController = require('../controllers/BikeController');

router.get('/hateoas/bikes', (req, res) => {

	// create an example BikeJSON
	var bikeSchema = {
		"name": "Bike name",
		"description": "This is bike description",
		"status": "Initial",
		"time": {
			"rentTime": 1
		}
	};

	// call res.json as normal but pass second param as array of links
	res.json(bikeSchema, [
		{rel: "get", method: "GET", title: 'Get bike by Id', href: 'http://127.0.0.1/bikes/:bikeId'},
		{rel: "get", method: "GET", title: 'Get all bikes', href: 'http://127.0.0.1/bikes/'},
		{rel: "create", method: "POST", title: 'Create bike', href: 'http://127.0.0.1/bikes'},
		{rel: "update", method: "PUT", title: 'Update bike', href: 'http://127.0.0.1/bikes/:bikeId'},
		{rel: "delete", method: "DELETE", title: 'Delete bike', href: 'http://127.0.0.1/bikes/:bikeId'}

	]);
});


router.get('/bikes', BikeController.getBikeList);

router.get('/bikes/:bikeId', BikeController.getBikeById);

router.post('/bikes', BikeController.createBike);

router.put('/bikes/:bikeId', BikeController.updateBike);

router.delete('/bikes/:bikeId', BikeController.deleteBike);

module.exports = router;
