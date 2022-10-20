const KakaoStrategy = require('passport-kakao').Strategy;
const { User } = require('../models/User');
const config = require('config');
const kakaoOAuth = config.get('kakaoOAuth');


module.exports = new KakaoStrategy(
    {
        clientID: kakaoOAuth.clientID,
        callbackURL: '/auth/kakao/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
        console.info('___new KakaoStrategy()');
        //TODO 쿼리문손보기
        try {           // DB에서 사용자 검색
            const exUser = await User.findOne({
                where: { sns_id: profile.id, provider: 'kakao' },
            });

            if (exUser) {
                console.log('___kakao exUser', exUser);
                done(null, exUser);
            } else {    // DB에 사용자가 저장되어 있지 않으면 DB에 새로 저장
                const newUser = await User.create({
                    email: profile._json && profile._json.email,
                    name: profile.displayName,
                    sns_id: profile.id,
                    provider: 'kakao',
                });
                console.log('___kakao newUser', newUser);
                done(null, newUser);
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }
);