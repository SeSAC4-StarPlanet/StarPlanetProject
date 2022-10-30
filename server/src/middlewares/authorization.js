const createError = require('http-errors');
const passport = require('../../config/passport');



// JWT 복호화 후 권한 있으면 true를 반환하는 API
const JWTauth = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        console.log('passport-jwt');
        if (err | !user) throw createError(400, { errors: info.message });
        res.status(201).json({ result: true });
    })(req, res, next); // 미들웨어 내의 미들웨어
};

exports.JWTauth = JWTauth;