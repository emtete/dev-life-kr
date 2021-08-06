// var express = require('express');
// var path = require('path');
// var serveStatic = require('serve-static');
// app = express();
// app.use(serveStatic(__dirname));
// var port = process.env.PORT || 5000;
// app.listen(port);
// console.log('server started '+ port);

var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();

//we are configuring dist to serve site files
app.use('/', serveStatic(path.join(__dirname, '/dist')));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Use a fallback for non-root routes (required for Vue router)
//   NOTE: History fallback must be "used" before the static serving middleware!
// app.use(
//   history({
//     // OPTIONAL: Includes more verbose logging
//     verbose: true,
//   }),
// );

// Serve static assets from the build files (images, etc)
// app.use(serveStatic(path.join(__dirname, '/dist')));

var port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server started at http://localhost:5000');
});

// heroku git:remote -a dev-life-kr
// git add .
// git commit -m "."
// heroku buildpacks:set heroku/nodejs
// git subtree push --prefix dist heroku master
