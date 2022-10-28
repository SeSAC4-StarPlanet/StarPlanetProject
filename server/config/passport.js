const passport = require('passport');
const googleStrategy = require('./passport/googleStrategy');
const naverStrategy = require('./passport/naverStrategy');
const kakaoStrategy = require('./passport/kakaoStrategy');
const localStrategy = require('./passport/localStrategy');
const jwtStrategy = require('./passport/jwtStrategy');

// const { User } = require("../src/models/User");





/* passport 설정 */
// 로그인 성공시 실행
passport.serializeUser((user, done) => {
    done(null, user);
});

// 로그인 성공 후 클라이언트 요청마다 호출
passport.deserializeUser(async (user, done) => {
    //사용자식별자로 유저정보를 복원해 req.user에 저장, 회원정보가 필요할 때 api에서 사용
    done(null, user);
});



passport.use('google', googleStrategy);
passport.use('naver', naverStrategy);
passport.use('kakao', kakaoStrategy);
passport.use('local', localStrategy);
passport.use('jwt', jwtStrategy);

module.exports = passport;
