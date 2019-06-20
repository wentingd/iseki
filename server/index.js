require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const routes = require('./routes');
const logger = require('./logger');

const port = process.env.SERVER_PORT || '5001';

app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

app.listen(port, () => {
  logger.info(`Express server listening on port ${port}`);
});
