'use strict';

module.exports = function (req, res, next) {

	// save a pointer to the original res.json() so we can replace it if we don't have a links param
	var originalJson = res.json;

	// override default express res.json method to intercept second param
	res.json = function (object, links) {

		// grab the object and avoid updating reference.
		var jsonObject = JSON.parse(JSON.stringify(object));

		res.json = originalJson;

		if (!links || links.length <= 0) {

			// no links provided, therefore process this as normal
			res.json(jsonObject);
		}
		else {

			// either add to existing links collection or add new collection
			if (jsonObject.links) {
				jsonObject.links = jsonObject.links.concat(links);
			} else {
				jsonObject.links = jsonObject.links = links;
			}

			// send modified object to browser
			res.json(jsonObject);
		}
	}

	next();
};
