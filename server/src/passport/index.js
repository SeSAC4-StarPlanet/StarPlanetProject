const passport = require('passport');
const localStrategy = require('./localStrategy');
const googleStrategy = require('./googleStrategy');
const kakaoStrategy = require('./kakaoStrategy');
const { User } = require('../models/User');


// 로그인 성공시 실행 - req.session에 사용자식별자 저장
passport.serializeUser((user, done) => {
    console.info('___passport.serializeUser()');
    done(null, user.user_id);
});

// 로그인 성공 후 클라이언트 요청마다 호출 - req.session의 사용자 식별자를 이용해 실제 세션의 사용자 정보를 읽어 req.user에 저장
passport.deserializeUser((user_id, done) => {     // DB를 사용할 경우 여기서 serializeUser에서 받아온 username 기반으로 db에서 검색
    console.info('___passport.deserializeUser()');
    //TODO 쿼리문손보기
    User.findOne({ where: { user_id } })
        .then((user) => done(null, user))
        .catch((err) => done(err));
});

passport.use(localStrategy);
passport.use(googleStrategy);
passport.use(kakaoStrategy);

module.exports = passport;
