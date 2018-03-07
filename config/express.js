var express = require('express'); 
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('infra',{cwd:'app'})
		.then('routes')
		.into(app);

	app.use(function(req, res, next) {
		res.status(404).json({"error":404});
		next();
	});

	app.use(function(error, req, res, next) {
		if(process.env.NODE_ENV == 'prod')
		{
			res.status(500).json({"error":500});
		}
		next(error);
	});

	return app; 
};