const express = require('express');
const router = express.Router();
const cars = require('../models/Car');

router.route('/').get((req, res) => {
  cars.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

});

module.exports = router;

