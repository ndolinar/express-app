const express = require('express');
const routes = require('./routes/index');

// set up express app
const app = express();

// routing
app.use(routes);


// not found
app.get('*', function(req, res) {
  res.send('Nope, sorry.', 404);
});

// listen for requests
// const PORT = process.env.port || 4000;
app.listen(4000, function() {
  console.log('Express server listening on port 4000');
});
