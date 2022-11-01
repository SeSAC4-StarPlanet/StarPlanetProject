const router = require('express').Router();
const passport = require('../../../config/passport');
const User = require('../../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const config = require("../../../config/default");
const { success } = require('../../../config/passport/naverStrategy');
const secret = config.secretOrKey;
const clientUrl = config.client;


router.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});



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
        res.status(500).json({ error: "server Error" });
    }
});


//? 로컬 로그인 
router.post('/login', async (req, res, next) => {    // 지정전략(strategy)를 사용해 로그인에 성공/실패할경우 이동할 경로와 메시지 설정
    passport.authenticate('local', (err, user, info) => {
        console.log('passport-local');

        // 인증이 실패했거나 유저 데이터가 없으면 에러 발생
        if (err || !user) return res.status(400).json({ errors: info.message });

        // 유저 데이터로 로그인 진행
        return req.login(user, { session: false }, (loginError) => {    // jwt 토큰 이용시 session 사용 종료
            if (loginError) return next(loginError);

            // 로그인 성공시 JWT토큰 생성 후 클라이언트에게 반환
            const token = setUserToken(res, req.user);
            const userInfo = req.user;
            return res.status(201).json({ isLogin: true, token: token, userInfo: userInfo });
        });
    })(req, res, next); // 미들웨어 내의 미들웨어
});

//? 간편 로그인 
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: clientUrl + "/login",
    successRedirect: clientUrl
}),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.redirect(`${clientUrl}?token=${token}`);
        // res.redirect(`${process.env.CLIENT_URL}?token=${setUserToken(req.user)}`);
        // res.status(200).json({ result: 'ok', token: token });
    });

router.get('/naver', passport.authenticate('naver'));
router.get('/naver/callback', passport.authenticate('naver', {
    failureRedirect: clientUrl + "/login",
}),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });

router.get('/kakao', passport.authenticate('kakao', { scope: ["profile_nickname", "account_email"] }));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: clientUrl + "/login",
}),
    (req, res) => {
        const token = setUserToken(res, req.user);
        res.status(200).json({ result: 'ok', token });
    });



// 아이디 찾기
router.post("/findID", async (req, res) => {
    console.log('findID!');
    try {        // DB에서 사용자 검색
        User.findOne({ $and: [{ username: req.body.username }, { email: req.body.email }] })
            .exec((err, r) => {
                {
                    if (err) return res.status(400).json(err);
                    // 사용자 있으면 아이디 반환
                    console.log('findUser: ', r);
                    return res.status(200).json({ success: true, userID: r.userID });
                }
            })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "server Error" });
    }
})

// 비밀번호 재설정
router.post("/resetPW1", async (req, res) => {
    console.log('resetPW!');
    const { userID, username, email } = req.body.data;

    try {
        // DB에서 사용자 검색
        User.findOne({ $and: [{ userID }, { username }, { email }] })
            .exec((err, r) => {
                if (err) return res.status(400).json(err);
                // 사용자 있으면 아이디 반환
                console.log('findUser: ', r);
                return res.status(200).json({ success: true, uid: r.id });
            })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "server Error" });
    }
})
router.post("/resetPW2", async (req, res) => {
    console.log('updatePW!');
    const { uid, hashedPW } = req.body;

    try {// 비밀번호의 Plain Text를 hash로 교체
        console.log('before PW:', hashedPW);
        const newhashedPW = await bcrypt.hash(hashedPW, 10);
        console.log(' after PW: ', newhashedPW);

        // DB에서 사용자 비밀번호 업데이트
        await User.updateOne({ _id: uid }, { hashedPW: newhashedPW });
        console.log('PW updated!');
        return res.status(200).json({ success: true, msg: 'PW updated!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "server Error" });
    }
})


//& jwt토큰 발급
function setUserToken(res, user) {
    user.type = 'JWT';
    const token = jwt.sign(user.toJSON(), secret, {
        expiresIn: '3h', // 만료시간 3시간
        issuer: 'starplanet',
    });
    return token;
}


//& JWT verify
router.all('*', function (req, res, next) {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
        console.log("passport-jwt");
        if (err | !user) {
            console.log(req.headers);
            console.log(req.user);
            res.status(400).json({ errors: info.message });
        }
        next();
    })(req, res, next); // 미들웨어 내의 미들웨어
});



// 로그아웃 
router.get('/logout', async (req, res) => {
    console.log("logout");
    try {
        req.logout();
        req.session.destroy();
        res.status(200).json({ message: 'logout' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ isLogin: true, error: "server Error", });
    }
});



module.exports = router;
