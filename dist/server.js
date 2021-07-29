var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

// heroku git:remote -a dev-life-kr
// git add .
// git commit -m "."
// heroku buildpacks:set heroku/nodejs
// git push heroku master
// git subtree push --prefix dist heroku master