const express = require('express');
const router = express.Router();

const passport = require('../../config/passport');
const jwt = require("jsonwebtoken");
const secret = require('../../config/default').secretOrKey;
const { verifyToken } = require('../middlewares/authorization');


//* jwt토큰 발급
function setUserToken(res, user) {
    user.type = 'JWT';
    const token = jwt.sign(user.toJSON(), secret, {
        expiresIn: '15m', // 만료시간 15분
        issuer: '토큰발급자',
    });
    // res.cookies('x_auth', token);
    // res.cookie('x_auth');
    return token;
}


router.get('/', (req, res) => {
    if (req.cookies.token != null) {
        console.log('path : /auth');
        console.log('req.user : ', req.user);
        console.log('req.cookies : ', req.cookies);

        const token = setUserToken(res, req.user);
        return res.status(201).json({ result: 'ok', token });
    } else {
        res.redirect('/auth/login');
    }
});

//! passport-jwt 미들웨어 
// JWT 복호화 후 권한 있으면 true를 반환하는 API
router.post('/', passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        console.log("passport-jwt");

        try {// header의 Authorization에 토큰 설정
            res.json({ result: true });
        } catch (error) {
            console.error(error);
            next(error);
        }
    }
);


// 로그인
router.get('/login', (req, res) => {
    if (req.query.loginError != null) console.log("***** Error : ", req.query.loginError, "*****");
    res.status(400).json({ errors: 'login ERROR' });
})

//! 로컬 로그인 
// 지정전략(strategy)를 사용해 로그인에 성공/실패할경우 이동할 경로와 메시지 설정
router.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        console.log('passport-local');

        // 인증이 실패했거나 유저 데이터가 없으면 에러 발생
        if (err || !user) return res.status(400).json({ errors: info.message });

        // 유저 데이터로 로그인 진행
        return req.login(user, { session: false }, (loginError) => {    // jwt 토큰 이용시 session 사용 종료
            if (loginError) return next(loginError);

            // 로그인 성공시 JWT토큰 생성 후 클라이언트에게 반환
            const token = setUserToken(res, req.user);
            return res.status(201).json({ result: 'ok', token });
        });
    })(req, res, next); // 미들웨어 내의 미들웨어
});



//? 간편 로그인 
// 구글 간편로그인
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth' }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });

// 네이버 간편로그인
router.get('/naver', passport.authenticate('kakao'));
router.get('/naver/callback', passport.authenticate('naver', { failureRedirect: '/auth' }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });

// 카카오 간편로그인
router.get('/kakao', passport.authenticate('kakao', { scope: ['', ''] }));
router.get('/kakao/callback', passport.authenticate('kakao', { failureRedirect: 'http://localhost:3000/login', }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        // res.status(200).json({ result: 'ok', token });
        res.status(200).redirect("http://localhost:3000/");
    });



// 로그아웃 
router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.cookie('token', null, {
        maxAge: 0,
    });
    res.json({ message: 'logout' });
});



module.exports = router;
