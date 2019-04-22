var Todos = require('../models/todomodel');

module.exports = function(app){
	app.get('/api/setupController', function(req, res){

		var starterTodos = [
		{
			username: "test",
			todo: "by milk",
			isDone: false,
			hasAttachment: false
		},
		{
			username: "test",
			todo: "eat dog",
			isDone: false,
			hasAttachment: false
		},
		{
			username: "test",
			todo: "learn node",
			isDone: false,
			hasAttachment: false
		}];
		Todos.create(starterTodos, function(err, result){
			res.send(result);
		})
	})
}