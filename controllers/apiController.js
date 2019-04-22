var Todos = require('../models/todomodel');
var bodyParser = require('body-parser');
module.exports = function(app){
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));

   app.get('/api/todos', function(req, res){
   	Todos.find({}, function(err, result){
   		if(err) throw err;
   		res.send(result);
   	})
   })
   app.get('/api/todos/:uname', function(req, res){
   	Todos.find({username: req.params.uname}, function(err, todos){
   		if(err) throw err;
   		res.send(todos)
   	})
   })


   app.get('/api/todo/:id', function(req, res){
   		Todos.findById({_id: req.params.id}, function(err, result){
   			if (err) throw err;
   			res.send(result);
   		})
   })

   app.post('/api/todo', function(req, res){

   		if (req.body.id){
   			console.log(req.body.todo)
   			Todos.findByIdAndUpdate(
   				req.body.id,
   				{

   				todo: req.body.todo,
   				isDone: req.body.isDone,
   				hasAttachment: req.body.hasAttachment
   			
   			}, 
   			function(err){
   				if (err) throw err;
   				res.send('success')
   			})
   		}
   		else
   		{
   			var newTodo = new Todos({
   				username: "test",
   				todo: req.body.todo,
   				isDone: req.body.isDone,
   				hasAttachment: req.body.hasAttachment
   			})
   			newTodo.save(function(err){
   				if (err) throw err;
   				res.send('success');
   			})
   		}
   })
   app.delete('/api/todo/', function(req, res){
   		Todos.findByIdAndRemove(req.body.id, function(err){
   			if (err) throw err;
   			res.send('success');
   		})
   })
}