//UserController
module.exports.list = (req,res, next) => {
	service = req.app.services.UserService;
	service.list(req.app).then((list) => res.json(list));
}

module.exports.add = (req, res, next) => {
	res.json(req.body);
}