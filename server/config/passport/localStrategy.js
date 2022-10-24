const LocalStrategy = require('passport-local').Strategy;

const { User } = require('../../src/models/User');

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
                console.log("*****Username invalid*****");
                return done(null, false, { message: '아이디가 존재하지 않습니다.' });
            }


            // if (name == fakeUser.name) {
            //     if (password == fakeUser.password) {
            //         console.log("*****Login Success*****")
            //         done(null, fakeUser);
            //     } else {
            //         console.log("*****Password Invalid*****");
            //         done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
            //     }
            // } else {
            //     console.log("*****Username invalid*****");
            //     done(null, false, { message: '사용자 이름이 존재하지 않습니다.' });
            // }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);
