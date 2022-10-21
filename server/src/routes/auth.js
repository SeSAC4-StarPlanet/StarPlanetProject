const express = require('express');
const passport = require('../passport/index.js');
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const router = express.Router();
const auth = require("../../middleware/auth");


router.get('/', (req, res) => {
    if (req.cookies.token != null) {
        console.log('path : /auth');
        console.log('req.user : ', req.user);
        console.log('req.cookies : ', req.cookies); res.send("로그인 성공");
    } else {
        res.redirect('/auth/login');
    }
});


// passport-jwt를 이용해 인증을 시도할 경우 (인증 확ㅣㄴ)
router.get('/auth', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        console.log("passport-jwt 인증 시도");
        try {
            res.json({ result: true });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
);
router.get('/login', (req, res) => {
    if (req.query.loginError != null) console.log("***** Error : ", req.query.loginError, "*****");
    res.render('login');
})
router.post('/login', (req, res, next) => {     // 사용자 인증 -  지정전략(strategy)를 사용해 로그인에 성공/실패할경우 이동할 경로와 메시지 설정
    passport.authenticate('local', (authError, user, info) => {
        if (authError) return next(authError);
        if (!user) return res.redirect(`/auth/login?loginError=${info.message}`);
        return req.login(user, { session: false }, (loginError) => {// jwt 토큰을 이용시 session 사용 종료
            if (loginError || !user) return next(loginError);
            else {
                setUserToken(res, req.user);
                res.redirect("/auth");
            }
        });
    })(req, res, next); // 미들웨어 내의 미들웨어에
});



router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth',
    }),
    (req, res) => {
        setUserToken(res, req.user);
        res.redirect('/auth');
    }
);

router.get('/kakao', passport.authenticate('kakao'));
router.get(
    '/kakao/callback',
    passport.authenticate('kakao', {
        failureRedirect: '/auth',
    }),
    (req, res) => {
        setUserToken(res, req.user);
        res.redirect('/auth');
    }
);


router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.cookie('token', null, {
        maxAge: 0,
    });
    res.redirect('/auth');
});



const secret = 'JWT-SECRET-KEY';
function setUserToken(res, user) {
    user.type = 'JWT';
    const token = jwt.sign(user, secret, {
        expiresIn: '15m', // 만료시간 15분
        issuer: '토큰발급자',
    });
    res.cookie('token', token);
}


module.exports = router;
