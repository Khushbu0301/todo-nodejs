var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//statis files

app.use(express.static('./public'))

//fire controllers
todoController(app);

//listen to port

app.listen(3000);
console.log('Welcome, You are listening to port 3000');
