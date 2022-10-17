const express = require('express');
const controller = require('../controllers/sample')
const router = express.Router();

router.post('/', controller.addSample);

module.exports = router;