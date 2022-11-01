var NaverStrategy = require('passport-naver').Strategy;
const naverOAuth = require('../default').naverOAuth;
const User = require('../../src/models/User');


module.exports = new NaverStrategy(
    {
        clientID: naverOAuth.clientID,
        clientSecret: naverOAuth.clientSecret,
        callbackURL: naverOAuth.callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('___naver profile', profile);

        try {           // DB에서 사용자 검색
            const exUser = await User.findByUserID(profile.id);

            if (exUser) {
                console.log('___naver exUser', exUser);
                done(null, exUser);
            } else {    // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
                const newUser = await User.create({
                    userID: profile.id,
                    username: profile.displayName,
                    email: profile._json && profile._json.email,
                    provider: 'naver',
                });
                console.log('___naver newUser', newUser);
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);