function UserService()
{
}

UserService.prototype.list = (app) =>{
	let connection = app.infra.connectionFactoryMongo();
	let user = connection.model("User",app.models.user);
	return user.find();
};

module.exports = function() {
	return new UserService();
}