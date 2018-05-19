const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./router');
const config = require('./config');
app.use(cors());
app.use(router);
app.listen(config.port, config.host, function () {
  console.log('ok');
});