/**
 * @module UsersRouter
 * @requires express
 */

const express = require('express');
const router = express.Router();
const client = require('../database');
router.get('/users/:name', async (req, res) => {
	try {
		const query = 'SELECT name, email FROM users WHERE name = ?';
		let result = await client.execute(query, [req.params.name]);
		res.status(200).json(result)
	} catch (err) {
		res.status(500).json(err)

	}
});

module.exports = router;

