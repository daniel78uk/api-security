var helmet = require ('helmet');
var cors = require ('cors');
var bodyParser = require('body-parser');

function add(app, args) {
  if (typeof app.use !== 'function') {
    return false;
  }

  // enable cors
  app.use(cors());
  // helmet configs
  app.use(helmet());

  const bpArgs = args || { limit : '100kb' };

  // body parser
  app.use(bodyParser.json(bpArgs));

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use((req, res, next) => {
    res.header('x-powered-by' , ' ')
    // attach
    next()
  });
}

var exports = module.exports = {};
exports.secure = add;
