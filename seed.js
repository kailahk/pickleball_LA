require('dotenv').config();
require('./config/database');

const Court = require('./models/court');
const data = require('./data');

const p1 = Court.deleteMany({});

Promise.all([p1])
  .then(function (results) {
    console.log(results);
    return Court.create(data.courts);
  })
  .then(process.exit);