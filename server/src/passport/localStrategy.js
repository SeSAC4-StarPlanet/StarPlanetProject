const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/User');
const config = require('config');

// Username, password가 서버에 저장된 정보와 일치하는지 확인 후 로그인 승인
module.exports = new LocalStrategy(
    {
        usernameField: 'user_id',
        passwordField: 'password',
        session: true,
        passReqToCallback: true,
    },
    async (user_id, password, done) => {    // verify
        try {           // DB에서 사용자 검색
            const exUser = await User.findOne({ user_id: user_id });

            if (exUser) {
                console.log('exUser', exUser);
                done(null, exUser);

                return User.checkPassword(
                    exUser.salt, password, (passwordError, isMatch) => {
                        if (isMatch) return done(null, exUser);
                        return done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                    }
                )
            } else {
                return done(null, false, { message: '아이디가 존재하지 않습니다.' });

                const newUser = await User.create({
                    email: profile._json && profile._json.email,
                    name: profile.displayName,
                    sns_id: profile.id,
                    provider: 'google',
                });
                console.log('newUser', newUser);
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);
