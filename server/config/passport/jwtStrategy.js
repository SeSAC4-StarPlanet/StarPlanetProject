const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const secret = require('../../config/default').secretOrKey;
const { User } = require('../../src/models/User');


const JWTConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),    // header의 bearer스키마에 담겨온 토큰 해석
    secretOrKey: secret     // 복호화 방식
};

const JWTVerify = async (jwtPayload, done) => {
    console.info('___new JWTStrategy()');
    console.log('___jwtPayload', jwtPayload);

    try {
        // palyload의 유저id값으로 유저 데이터 조회
        const exUser = await User.findOne({ userID: jwtPayload.userID });

        // 유저 데이터 있을 경우 유저 데이터 객체 전송
        if (exUser) return done(null, exUser);

        // 유저 데이터 없을 경우 에러 표시
        console.log("*****jwt inValid*****");
        done(null, false, { message: '올바르지 않은 인증정보입니다.' });
    } catch (error) {
        console.error(error);
        done(error);
    }
};

module.exports = new JWTStrategy(JWTConfig, JWTVerify);
