module.exports = function(app) {
	app.get('/trash',function(req,res, next) {
		res.json({'teste':'ok'});
	});
}
