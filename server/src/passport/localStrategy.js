const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/User');
const config = require('config');

// Username, password가 서버에 저장된 정보와 일치하는지 확인 후 로그인 승인
module.exports = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
    },
    async (name, password, done) => {
        try {
            if (name == User.name) {
                if (password == User.password) {
                    console.log("*****Login Success*****")
                    done(null, User);
                } else {
                    console.log("*****Password Invalid*****");
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            } else {
                console.log("*****Username invalid*****");
                done(null, false, { message: '사용자 이름이 존재하지 않습니다.' });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);
