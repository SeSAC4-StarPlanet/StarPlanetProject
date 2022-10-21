const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.createUser = async (req, res) => {
    const { user_id, username, email, password } = req.body;

    try {
        // email을 비교하여 user가 이미 존재하는지 확인
        let user = await User.findOne({ user_id });
        if (user) { return res.status(400).json({ errors: [{ msg: "User already exists" }] }); }

        //user에 name, email, password 값 할당
        user = new User({ user_id, username, email, password });    //TODO 문법확인

        //! password 암호화
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(); //db에 user 저장

        //! json web token 생성 및 response
        const payload = {
            user: {
                id: user.user_id,
            },
        };
        /*
        @payload token으로 변환할 데이터 
        @jwtSecret secret key 값
        @expiresIn 유효시간
         */
        jwt.sign(payload, 'JWT-SECRET-KEY', { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            res.send({ token });
        });

    } catch {
        console.error(error.message);
        res.status(500).send("server Error");
    }

}