const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { User } = require('../../src/models/User');
const googleOAuth = require('../default').googleOAuth;


module.exports = new GoogleStrategy(
    {
        clientID: googleOAuth.clientID,
        clientSecret: googleOAuth.clientSecret,
        callbackURL: googleOAuth.callbackURL,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.info('___new googleStrategy()');
        console.log('___google profile', profile);

        try {           // DB에서 사용자 검색
            const exUser = await User.findOne({ userID: profile.id });
            // if (exUser.email == (profile._json && profile._json.email)
            if (exUser) {
                console.log('___google exUser', exUser);
                done(null, exUser);
            } else {    // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
                const newUser = await User.create({
                    userID: profile.id,
                    username: profile.displayName,
                    email: profile._json && profile._json.email,
                    provider: 'google',
                });
                console.log('___google newUser', newUser);
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);