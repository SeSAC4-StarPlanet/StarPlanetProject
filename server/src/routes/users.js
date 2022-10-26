const express = require("express");
const router = express.Router();
const User = require("../models/User");
const controller = require("../controllers/user");

// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../../config/default").secretOrKey;


// 모든 회원 조회
router.get("/", (req, res) => {
  User.find({})
    .sort({ username: 1 }) // 회원 이름을 기준으로 정렬 (역순 정렬은 -1)
    .exec((err, users) => {
      // 실행
      if (err) return res.json(err);
      res.json(users);
    });
});

// 회원 검색 (url로 넘어온 파라미터를 _id로 저장)
router.get("/:_id", (req, res) => {
  User.findOne({ _id: req.params._id }, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
});



//! 회원 가입
// router.post('/', controller.createUser);
router.post("/", async (req, res) => {

  try {    // 유저id 비교하여 user가 이미 존재하는지 확인
    console.log('req.body: ', req.body);
    let user = await User.findOne({ userID: req.body.userID });

    if (user) {
      return res.status(400).json({ errors: "User already exists" });
    } else {
      user = new User({
        userID: req.body.userID,
        hashedPW: req.body.hashedPW,
        username: req.body.username,
        email: req.body.email,
      })
      // TODO
      user.save((err, user) => {
        if (err) return res.json(err);
        res.json(user);
      })

    }
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});


// 회원 정보수정
router.put("/:_id", (req, res) => {
  User.findOne({ userID: req.params._id })
    .select("hashedPW")
    .exec((err, user) => {
      if (err) return res.json(err);

      // 회원 업데이트하기
      user.originPw = user.hashedPW;
      user.hashedPW = req.body.newPw ? req.body.newPw : user.hashedPW;

      for (para in req.body) {
        user[para] = req.body[para];
      }

      user.save((err, user) => {
        if (err) return res.json(err);
        res.json(user);
      });
    });
});


// 회원 탈퇴
router.delete("/:_id", (req, res) => {
  User.deleteOne({ _id: req.params._id }, (err) => {
    if (err) return res.json(err);
    res.status(204).end();
  });
});

module.exports = router;
