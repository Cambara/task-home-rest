var mongoose = require('mongoose');

function ConnectionFactory()
{
	return mongoose.createConnection(process.env.MONGO_URL);
}

module.exports = function() 
{
	return ConnectionFactory;
}