const jwt = require("jsonwebtoken");
const secret = require('../../config/default').secretOrKey;


const verifyToken = function (req, res, next) {
    // header에서 토큰 가져오기         
    // header에서 x-auth-token 은 token의 key 값
    // token에는 JWT가 들어감
    try {
        const token = req.header("x-auth-token");         //토큰 없는지 체크
        if (!token) { return res.status(401).json({ msg: "No token, authorization denied" }); }
        const decoded = jwt.verify(token, secret);

        if (decoded) {
            req.user = decoded.user; // req에 user 정보 생성
            next();
        }
        else {
            res.status(401).json({ error: 'unauthorized' });
        }
    } catch (error) {
        res.status(401).json({ msg: "token expired" });
    }
};

exports.verifyToken = verifyToken;