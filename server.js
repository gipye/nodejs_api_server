const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router');

const app = express();

app.use(cors({origin: 'http://localhost:3000' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen(8080);
