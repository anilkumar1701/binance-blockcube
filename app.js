BASE_PATH                      = __dirname;
const process = require('process');
process.env.NODE_CONFIG_DIR    = 'config/';
var app_instance               = process.argv.NODE_APP_INSTANCE;
process.argv.NODE_APP_INSTANCE = "";
config                         = require('config');
process.argv.NODE_APP_INSTANCE = app_instance;

var express                   = require('express');
app                           = express();
const path                      = require('path');
const bodyParser                = require('body-parser');
const methodOverride            = require('method-override');

require('./startup/db')();
app.set('port', process.env.PORT || config.get('PORT'));
app.set('views', path.join(BASE_PATH, 'modules/jade/views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(methodOverride());


app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

// avoid syntax error to go in response
app.use(function (error, req, res, next) {
    console.log("error caught in middleware: ", error);
    if (error instanceof SyntaxError) {
      return res.sendStatus(400);
    }
    next();
  });


  require('./modules');

  const port = config.get('PORT') || 3010;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

module.exports.server = server;
