const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const routes = require('./routes');
const services = require('./services');
const logger = require('./utils/logger');
const log = require('./utils/log');

const app = express();
const router = express.Router();
const port = 3000;

app.engine('.html', ejs.__express);
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);
app.use(logger);
routes(router);
services(router);

app.listen(port, () =>
  log.info(`\n[===== Example app listening on port ${port}! =====]\n`)
);
