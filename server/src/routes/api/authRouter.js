const router = require('express').Router();
const passport = require('../../../config/passport');
const jwt = require("jsonwebtoken");
const secret = require('../../../config/default').secretOrKey;
const User = require('../../models/User');


//* jwt토큰 발급
function setUserToken(res, user) {
    user.type = 'JWT';
    const token = jwt.sign(user.toJSON(), secret, {
        expiresIn: '15m', // 만료시간 15분
        issuer: 'starplanet',
    });
    res.header('authorization', token);
    return token;
}


//!회원가입
router.post("/signup", async (req, res) => {
    try {
        const { userID, hashedPW, username, email } = req.body;
        // DB에서 사용자 검색
        const exUser = await User.findByUserID;
        // 사용자 있으면 에러메세지
        if (exUser != null) {
            console.log("*****User exists*****");
            return res.status(400).json({ errors: "User already exists" });
        } else {
            // 사용자 없으면 가입 진행
            const newUser = await new User({ userID, hashedPW, username, email });
            newUser.save((err, userInfo) => {
                if (err) {
                    console.log("*****Fail to save User***** ", err);
                    res.status(400).json({ errors: "Fail to save User", err });
                } else {// 가입성공
                    console.log('*****회원가입!*****', userInfo);
                    res.status(201).json({ success: true, userInfo });
                }
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
});


//? 로컬 로그인 
router.post('/login', async (req, res, next) => {    // 지정전략(strategy)를 사용해 로그인에 성공/실패할경우 이동할 경로와 메시지 설정
    passport.authenticate('local', (err, user, info) => {
        console.log('passport-local');

        // 인증이 실패했거나 유저 데이터가 없으면 에러 발생
        // if (err || !user) return res.status(400).json({ errors: info.message });
        if (err || !user) res.status(400).send({ errors: info.message });

        // 유저 데이터로 로그인 진행
        return req.login(user, { session: false }, (loginError) => {    // jwt 토큰 이용시 session 사용 종료
            if (loginError) return next(loginError);

            // 로그인 성공시 JWT토큰 생성 후 클라이언트에게 반환
            const token = setUserToken(res, req.user);
            const userInfo = req.user;
            return res.status(201).json({ result: 'ok', userInfo, token });
        });
    })(req, res, next); // 미들웨어 내의 미들웨어
});

//? 간편 로그인 
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });
router.get('/naver', passport.authenticate('naver'));
router.get('/naver/callback', passport.authenticate('naver', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });
router.get('/kakao', passport.authenticate('kakao', { scope: ['', ''] }));
router.get('/kakao/callback', passport.authenticate('kakao', { failureRedirect: 'http://localhost:3000/login', }),
    (req, res) => {
        const token = setUserToken(res, req.user);
        // res.status(200).json({ result: 'ok', token });
        res.status(200).redirect("http://localhost:3000/");
    });



// 아이디찾기
router.get("/findID", async (req, res) => {
    try {
        // DB에서 사용자 검색
        const { username, email } = req.body;
        const exName = await User.findByName(username).lean();
        const exEmail = await User.findByEmail(email).lean();

        // 사용자 있으면 아이디 반환
        if (exName || exEmail) {
            console.log("*****User exists*****");
            return res.status(200).json({ errors: "User already exists" });
        } else {

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
})

// 비밀번호 재설정
router.get("/resetPW", async (req, res) => {
    try {
        // DB에서 사용자 검색
        const { username, email } = req.body;
        const exName = await User.findByName(username).lean();
        const exEmail = await User.findByEmail(email).lean();

        // 사용자 있으면 아이디 반환
        if (exName || exEmail) {
            console.log("*****User exists*****");
            return res.status(200).json({ errors: "User already exists" });
        } else {

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
})
router.post("/resetPW", async (req, res) => {
    try {
        // DB에서 사용자 검색
        const { username, email } = req.body;
        const exName = await User.findByName(username).lean();
        const exEmail = await User.findByEmail(email).lean();

        // 사용자 있으면 아이디 반환
        if (exName || exEmail) {
            console.log("*****User exists*****");
            return res.status(200).json({ errors: "User already exists" });
        } else {

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
})



//& JWT verify
router.all('*', function (req, res, next) {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
        console.log("passport-jwt");
        if (err | !user) {
            console.log(req.headers);
            console.log(req.user);
            res.status(400).send({ errors: info.message });
        }
        next();
    })(req, res, next); // 미들웨어 내의 미들웨어
});



// 로그아웃 
router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.cookie('token', null, {
        maxAge: 0,
    });
    res.status(200).json({ message: 'logout' });
});



module.exports = router;
