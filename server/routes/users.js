/**
 * @module UsersRouter
 * @requires express
 */

const express = require('express');
const router = express.Router();
let models = require("../database");

router.get('/users', async (req, res) => {
	models.instance.User.findOne({name: 'Dragos'}, function (err, user) {
		if (err) {
			res.status(500).json(err)
			return;
		}
		res.status(200).json(user)
	});
});

router.post('/users', async (req, res) => {
	try {
		let newUser = new models.instance.User({
			name: req.body.name,
			surname: req.body.surname,
			// age: req.body.age,
			created: {$db_function: 'toTimestamp(now())'}
		});
		let save = await newUser.save();
		res.status(200).json(save)
	} catch (err) {
		res.status(500).json(err)

	}
});

module.exports = router;

