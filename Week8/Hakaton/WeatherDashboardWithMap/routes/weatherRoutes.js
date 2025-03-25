const express = require('express');
const router = express.Router();
const {getWeather}=require('../controllers/weatherController.js')


router.get('/:city', getWeather);


module.exports = router;