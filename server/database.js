const cassandra = require('cassandra-driver');

let client = new cassandra.Client(
	{
		contactPoints: ['127.0.0.1'],
		keyspace: 'warehouse'
	});

module.exports = client
