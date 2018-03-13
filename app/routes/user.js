module.exports = function(app) {

	app.route('/')
		.get(app.controllers.UserController.list)
		.post(app.controllers.UserController.add);
}
