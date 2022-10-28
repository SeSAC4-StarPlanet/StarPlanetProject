const express = require("express");
const router = express.Router();
const { verifyToken } = require('../middlewares/authorization');
// const path = require('path');

// router.use("/", function (req, res) {
//     res.send("test연결입니다~");
// });

router.use("/auth", require("./authRouter"));
router.use("/user", require("./userRouter"));
router.use('/planet', require('./planetRouter'));
router.use('/diary', verifyToken, require('./diaryRouter'));

module.exports = router;
