'use strict';

const MainController = require('../controllers/main.controller');
const response = require('../helpers/response');

module.exports = (app, path) => {
    app.route('/').get(MainController.index);
    // user routes
    app.get('/api', MainController.api)
	app.get('*', function(req, res, err){
		return response.json({
			code:404, message:'Not found'
		}, res);
	});

};