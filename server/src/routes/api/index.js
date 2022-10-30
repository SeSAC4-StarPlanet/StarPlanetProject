const router = require('express').Router();
const createError = require('http-errors');
const JWTauth = require('../../middlewares/authorization');

// TODO
router.use("/auth", require("./authRouter"));
router.use("/user", require("./userRouter"));


//& JWT verify
router.all('*', function (req, res, next) {
    console.log(req.headers);
    console.log(req.headers.authorization);

    JWTauth(req, res, next);
    next()
});
// router.all('*', (req, res, next) => {
//     passport.authenticate('jwt', { session: false }, (err, user, info) => {
//         console.log('passport-jwt');
//         if (err | !user) throw createError(400, { errors: info.message });
//         res.status(201).json({ result: true });
//     })(req, res, next); // 미들웨어 내의 미들웨어
// });




// TODO 
router.use('/planet', require('./planetRouter'));
router.use('/diary', require('./diaryRouter'));
// router.use('/album', require('./albumRouter'));
// router.use('/payment', require('./paymentRouter'));
// router.use('/alarm', require('./alarmRouter'));


// 예외 처리 
router.all('*', (req, res, next) => {
    next(createError(404, e.message));
});


module.exports = router;
