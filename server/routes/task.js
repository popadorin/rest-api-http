/**
 * @module TaskRouter
 * @description TaskRouter is responsible forwarding request to appropriate {@link TaskController} method
 *
 */

const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/hateos/tasks', (req, res) => {

	// create an example TaskJSON
	var taskSchema = {
		"name": "Task name",
		"description": "This is task description",
		"status": "Initial",
		"time": {
			"taskTime": 24,
			"bonsuTime": 24 / 2,
		}
	};

	// call res.json as normal but pass second param as array of links
	res.json(taskSchema, [
		{rel: "get", method: "GET", title: 'Get task by Id', href: 'http://127.0.0.1/tasks/:taskId'},
		{rel: "get", method: "GET", title: 'Get all tasks', href: 'http://127.0.0.1/tasks/'},
		{rel: "create", method: "POST", title: 'Create task', href: 'http://127.0.0.1/tasks'},
		{rel: "update", method: "PUT", title: 'Update task', href: 'http://127.0.0.1/tasks/:taskId'},
		{rel: "delete", method: "DELETE", title: 'Delete task', href: 'http://127.0.0.1/tasks/:taskId'}

	]);
});


router.get('/tasks', TaskController.getTaskList);

router.get('/tasks/:taskId', TaskController.getTaskById);

router.post('/tasks', TaskController.createTask);

router.put('/tasks/:taskId', TaskController.updateTask);

router.delete('/tasks/:taskId', TaskController.deleteTask);

module.exports = router;
