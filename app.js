var express = require('express');
var app =  express();
var mongoose = require('mongoose')
var config = require('./config')
var setUpController = require('./controllers/setupController')
var apiController = require('./controllers/apiController')
var db = mongoose.connection;
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getUrlDb(), {useNewUrlParser: true})


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// 	console.log('connect')
// })
setUpController(app);
apiController(app);
app.listen(port);