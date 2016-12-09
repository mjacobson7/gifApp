var app = require('./express.js')();
var port = process.env.PORT || 1200;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});

//server file
