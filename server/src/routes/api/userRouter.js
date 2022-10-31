const router = require('express').Router();
const createError = require('http-errors');
const passport = require('passport');
const { User } = require('../../models/User');


//^ 회원가입
router.post("/", async (req, res) => {
  try {
    const { userID, hashedPW, username, email } = req.body;

    // DB에서 사용자 검색
    const exUser = await User.findOne({ userID: userID }).lean();

    // 사용자 있으면 에러메세지
    if (exUser != null) {
      console.log("*****User exists*****");
      return res.status(400).json({ errors: "User already exists" });
    } else {
      // 사용자 없으면 가입 진행
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
// router.all('*', passport.authenticate('jwt', { session: false }),
//   async (req, res, next) => {
//     console.log("passport-jwt 인증 시도");
//     try {
//       res.json({ result: true });
//     } catch (error) {
//       console.error(error);
//       next(error);
//     }
//   }
// );





//! 특정 회원 조회 
router.get("/:_id", (req, res) => {

  User.findOne({ _id: req.params._id }, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
});



// 비밀번호재설정
// router.put("/:_id", (req, res) => {
//   const _id = req.params._id
//   User.findOne({ userID: req.params._id })
//     .select("hashedPW")
//     .exec((err, user) => {
//       if (err) return res.json(err);

//       user.originPw = user.hashedPW;
//       user.hashedPW = req.body.newPw ? req.body.newPw : user.hashedPW;

//       for (para in req.body) {
//         user[para] = req.body[para];
//       }

//       user.save((err, user) => {
//         if (err) return res.json(err);
//         res.json(user);
//       });
//     });
// });



//~

// 전체 회원조회
router.get("/", (req, res, next) => {
  User.find().select('-pwd')
    .then(r => {
      res.status(200).send({ success: true, msg: r })
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })

  // User.find()
  //   .sort({ createdAt: 1 }) // 가입일 기준으로 정렬 (역순 정렬은 -1)
  //   .exec((err, users) => {
  //     if (err) return res.json(err);
  //     res.json(users);
  //   });

});


// 회원수정
router.put("/:_id", (req, res) => {
  const _id = req.params._id
  User.updateOne({ _id }, { $set: req.body })
    .then(r => {
      res.status(200).send({ success: true, msg: r })
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })
});




// 회원 탈퇴
router.delete("/:_id", (req, res) => {
  const _id = req.params._id;
  User.deleteOne({ _id })
    .then(r => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })
});



// error handler
router.all('*', function (req, res, next) {
  next(createError(404, 'no api'));
});

module.exports = router;
