const router = require("express").Router();
var createError = require('http-errors');
// const { User } = require("../../models/User");
// const { Planet } = require("../../models/Planet");
const { Category } = require("../../models/Category");

/* 
Category form: {  name: '',  info: '', _planet: ''}
*/

/* middleware */
// router.all('*', function (req, res, next) {
//   // if (req.user.payment) return res.send({ success: false, msg: '권한이 없습니다.' })
//   next()
// })


router.get('/read/:name', (req, res, next) => {
  const name = req.params.name;
  Category.findOne({ name })
    .then(r => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })
})

router.get('/list', (req, res, next) => {
  Category.find()   // .sort({ })
    .then(rs => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })

});


// router.post('/', (req, res, next) => {
//   const { planet, name, info } = req.body
//   Category.create({ planet, name, info }) //  Category.create(req.body)
//     .then(r => {
//       res.send({ success: true, msg: r })
//     })
//     .catch(e => {
//       res.status(500).send({ msg: e.message });
//     })
// })


//~

// 전체 카테고리 조회
router.get('/', function (req, res, next) {
  Category.find()
    .then(r => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })
});


// 카테고리 수정
router.put("/:_id", (req, res) => {
  const _id = req.params._id
  Category.updateOne({ _id }, { $set: req.body })
    .then(r => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch(e => {
      res.status(500).send({ msg: e.message });
    })
});

// 카테고리  삭제
router.delete("/:_id", (req, res) => {
  const _id = req.params._id;
  Category.deleteOne({ _id })
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

