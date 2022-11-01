const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const googleOAuth = require('../default').googleOAuth;
const User = require('../../src/models/User');


module.exports = new GoogleStrategy(
    {
        clientID: googleOAuth.clientID,
        clientSecret: googleOAuth.clientSecret,
        callbackURL: googleOAuth.callbackURL,
        // passReqToCallback: true
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('___google profile', profile);

        try {           // DB에서 사용자 검색
            const exUser = await User.findByUserID(profile.id);

            if (exUser) {
                console.log('___google exUser', exUser);
                done(null, exUser);
            } else {    // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
                const newUser = await User.create({
                    userID: profile.id,
                    username: profile._json.name,   // profile.displayName
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