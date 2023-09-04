const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

app.listen(8080);
