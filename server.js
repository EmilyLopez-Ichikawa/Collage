var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Image = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
  
const connectionString = 'mongodb+srv://e_lopez-ichikawa:JoshDun!21@cluster0-qf4li.mongodb.net/test?retryWrites=true&w=majority';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(connectionString); 


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// app.use(bodyParser.json());
// app.use(bodyParser.raw({
//   type: 'image/png',
//   limit: '20mb'
// }));
// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// };


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(express.static('public'))

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

console.log('Server started on: ' + port);
