const router = require('express').Router();
const createError = require('http-errors');
const JWTauth = require('../../middlewares/authorization');
const { User } = require('../../models/User');


//^ 회원가입
router.post("/", async (req, res) => {
  try {
    const { userID, hashedPW, username, email } = req.body;
    // DB에서 사용자 검색
    const exUser = await User.findOne({ userID: userID });
    // 사용자 있으면 에러메세지
    if (exUser != null) {
      console.log("*****User exists*****");
      return res.status(400).json({ errors: "User already exists" });
    } else {// 사용자 없으면 가입 진행
      const newUser = await new User({ userID, hashedPW, username, email });
      newUser.save((err, userInfo) => {
        if (err) {
          console.log("*****Fail to save User***** ", err);
          res.status(400).json({ errors: "Fail to save User", err });
        } else {// 가입성공
          console.log('*****회원가입!*****', userInfo);
          res.status(201).json({ success: true, userInfo });
        }
      })
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});


//& JWT verify
router.all('*', function (req, res, next) {
  JWTauth(req, res, next);
  next()
});


// 모든 회원 조회 (관리자용)
router.get("/", (req, res, next) => {
  User.find()
    .sort({ createdAt: 1 }) // 가입일 기준으로 정렬 (역순 정렬은 -1)
    .exec((err, users) => {
      if (err) return res.json(err);
      res.json(users);
    });

  // User.find().then(r => {
  //   res.send({ success: true, users: r })
  // })
  //   .catch(e => {
  //     res.send({ success: false })
  //   })
});



// 특정 회원 조회 (url로 넘어온 파라미터를 _id로 저장)
router.get("/:_id", (req, res) => {
  User.findOne({ _id: req.params._id }, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
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



// error handler
router.all('*', function (req, res, next) {
  next(createError(404, 'no api'));
});

module.exports = router;
