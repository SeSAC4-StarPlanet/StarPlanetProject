const router = require('express').Router();
const createError = require('http-errors');
const User = require('../../models/User');



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


// 회원 조회 
router.get("/:_id", (req, res) => {
  User.findOne({ _id: req.params._id }, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
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
