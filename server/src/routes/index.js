const express = require('express');
const router = express.Router();
// const path = require('path');


router.use("/", function (req, res) {
    res.send("test연결입니다~");
});

router.use("/auth", require("./auth"));
router.use('/user'), require('./users');
router.use('/diary', require('./diarys'));


module.exports = router;