const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    // 모든 다큐먼트 검색
    User.find({})
        .sort({ username: 1 })  // 유저의 이름을 기준으로 정렬한다. (역순 정렬은 -1)
        .exec((err, users) => { // 실행
            if (err) return res.json(err);
            res.json(users);
        });
});

// /users/ObjectId
router.get("/:_id", (req, res) => {
    // url로 넘어온 파라미터를 _id로 저장하여, 해당 아이디를 가지는 유저를 찾는다
    User.findOne({ _id: req.params._id }, (err, user) => {
        if (err) res.json(err); res.json(user);
    });
});

router.post("/", (req, res) => {
    console.log(req.body); User.create(req.body, (err, user) => {
        if (err) res.json(err);
        res.json(user);
    });
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