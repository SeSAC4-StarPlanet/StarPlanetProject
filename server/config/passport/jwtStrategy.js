const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const secret = require('../../config/default').secretOrKey;
const { User } = require('../../src/models/User');

// const token = req.header("x-auth-token");     
const JWTConfig = {
    // Authorization header의 JWT 기반 Bearer스키마에 담겨온 토큰 해석
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret     // 복호화 방식
};

const JWTVerify = async (jwtPayload, done) => {
    try {
        console.info('___new JWTStrategy()');
        console.log('___jwtPayload', jwtPayload);

        // palyload의 유저id값으로 유저 데이터 조회
        const exUser = await User.findOne({ userID: jwtPayload.userID }).lean();

        // 유저 데이터 있을 경우 유저 데이터 객체 전송
        if (exUser) return done(null, exUser);

        // 유저 데이터 없을 경우 에러 표시
        console.log("*****jwt inValid*****");
        done(null, false, { message: 'token expired or unauthorized' });
    } catch (error) {
        console.error("No token, authorization denied", error);
        done(error);
    }
};

module.exports = new JWTStrategy(JWTConfig, JWTVerify);
