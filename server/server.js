require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
//const controller = require('./controllers.js');
const controller = require('../final-db/cassandraControllers.js');

const cors = require('cors');

const port = 8010;

// const db = require('../db/connection.js');
const client = require('../final-db/connection.js').client;

const publicDir = path.join(__dirname, '../client/public');

app.use(cors());

app.use(bodyParser.json());
app.use('/reviews/:id', express.static(publicDir));

// app.get('*/:id/neighborhood_stats', controller.getAllStats);

// app.get('*/:id/neighborhood_reviews', controller.getAllReviews);



app.post('*/:id/neighborhood_reviews', controller.postReview);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});