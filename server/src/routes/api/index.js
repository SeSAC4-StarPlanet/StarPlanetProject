const router = require('express').Router();
const createError = require('http-errors');
const passport = require('passport');

// TODO
router.use("/auth", require("./authRouter"));
router.use("/user", require("./userRouter"));


//& JWT verify
// router.all('*', (req, res, next) => {
//     passport.authenticate('jwt', { session: false }, (err, user, info) => {
//         console.log('passport-jwt');
//         if (err | !user) throw createError(400, { errors: info.message });
//         res.status(201).json({ result: true });
//     })(req, res, next); // 미들웨어 내의 미들웨어
// });

// router.all('*', passport.authenticate('jwt', { session: false }),
//     async (req, res, next) => {
//         console.log("passport-jwt 인증 시도");
//         try {
//             res.json({ result: true });
//         } catch (error) {
//             console.error(error);
//             next(error);
//         }
//     }
// );

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
