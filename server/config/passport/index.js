const passport = require('passport');
const localStrategy = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const kakaoStrategy = require('./kakaoStrategy');
const jwt = require('./jwtStrategy');

const { User } = require('../../src/models/User');


/* 쿠키/세션 serialize */


// 로그인 성공시 실행 - 서버세션(req.session)에 사용자식별자 저장
passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

// 로그인 성공 후 클라이언트 요청마다 호출 - 서버세션의 사용자식별자로 실제세션의 회원정보를 복원해 req.user에 저장
passport.deserializeUser(async (user_id, done) => {
    User.findOne({ user_id: user_id })      // serializeUser에서 받아온 사용자식별자 기반으로 db에서 검색
        .then((user) => done(null, user))   //user는 req.user로 들어감, 회원정보가 필요할 때 api에서 사용
        .catch((err) => done(err));
});


passport.use(localStrategy);
passport.use(googleStrategy);
passport.use(kakaoStrategy);
passport.use(jwt);

module.exports = passport;
