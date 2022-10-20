const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.get("/", (req, res) => {
    // 모든 사용자 검색
    User.find({})
        .sort({ username: 1 })  // 유저 이름을 기준으로 정렬한다. (역순 정렬은 -1)
        .exec((err, users) => { // 실행
            if (err) return res.json(err);
            res.json(users);
        });
});

router.get("/:_id", (req, res) => {
    // url로 넘어온 파라미터를 _id로 저장하여, 해당 아이디를 가지는 유저를 찾는다
    User.findOne({ _id: req.params._id }, (err, user) => {
        if (err) res.json(err); res.json(user);
    });
});

//TODO 
router.post("/", async (req, res) => {
    const { user_id, username, email, password } = req.body;

    try {
        // email을 비교하여 user가 이미 존재하는지 확인
        let user = await User.findOne({ user_id });
        if (user) { return res.status(400).json({ errors: [{ msg: "User already exists" }] }); }


        //user에 name, email, password 값 할당
        user = new User({ user_id, username, email, password });

        //password 암호화
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save(); //db에 user 저장

        //json web token 생성 및 response
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
        jwt.sign(payload, "jwtSecret", { expiresIn: "1h" }, (err, token) => {
            if (err) throw err;
            res.send({ token });
        });

    } catch {
        console.error(error.message);
        res.status(500).send("server Error");
    }
});


router.put("/:_id", (req, res) => {
    User.findOne({ _id: req.params._id })
        .select("password")
        .exec((err, user) => {
            if (err) return res.json(err);

            // 유저 업데이트하기 
            user.originPw = user.password;
            user.password = req.body.newPw ? req.body.newPw : user.password;

            for (para in req.body) {
                user[para] = req.body[para];
            }

            user.save((err, user) => {
                if (err) return res.json(err);
                res.json(user);
            });
        });
});

router.delete("/:_id", (req, res) => {
    User.deleteOne({ _id: req.params._id }, (err) => {
        if (err) return res.json(err);
        res.status(204).end();
    });
});


module.exports = router;