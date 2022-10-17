const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/api/sample', require('./sample'))


module.exports = router;