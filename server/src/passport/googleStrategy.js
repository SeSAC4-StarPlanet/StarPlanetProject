const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../models/User');
const config = require('config');
const googleOAuth = config.get('googleOAuth');


module.exports = new GoogleStrategy(
    {
        clientID: googleOAuth.clientID,
        clientSecret: googleOAuth.clientSecret,
        callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        console.info('___new GoogleStrategy()');
        console.log('___google profile', profile);
        //TODO 쿼리문손보기

        try {           // DB에서 사용자 검색
            const exUser = await User.findOne({ sns_id: profile.id, provider: 'google' });

            if (exUser) {
                console.log('___google exUser', exUser);
                done(null, exUser);
            } else {    // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
                const newUser = await User.create({
                    email: profile._json && profile._json.email,
                    name: profile.displayName,
                    sns_id: profile.id,
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