const express = require('express');
const { controller } = require('../controllers');

const router = express.Router();

router.get('/test', controller);

module.exports = router;