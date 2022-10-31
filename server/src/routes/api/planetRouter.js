const router = require("express").Router();
var createError = require("http-errors");
const { User } = require("../../models/User");
const { Planet } = require("../../models/Planet");
const { Category } = require("../../models/Category");

// const controller = require('../controllers/planet');

// workspace 행성 선택창
// 담당자 : 시온
router.get("/workspace/:userId", async (req, res) => {
  const { userId } = req.params;
  const _ID = userId;

  try {
    // user_id를 활용한 planet 탐색
    const planets = await Planet.find({ member: _ID });
    res.status(200).send({ planets: planets });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

// planet 테이블 불러오기
// 담당자 : 시온
router.get("/:user/:planet", async (req, res) => {
  const { user, planet } = req.params;

  const _ID = user;
  const _Planet = planet;

  try {
    const user = await User.findOne({ userID: _ID });
    const planet = await Planet.findOne({ name: _Planet, member: user.id });

    res.status(200).send({
      planet: planet,
      diary: planet.category.Diary,
      album: planet.category.Album,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

// 행성생성
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const { name, select, member } = req.body;
    const exMember = await User.findOne({ userID: member });

    const newPlanet = await new Planet({ name, select, exMember });
    newPlanet.save((err, planetInfo) => {
      if (err) {
        console.log("*****Fail to save Planet***** ", err);
        res.status(400).json({ errors: "Fail to save Planet", err });
      } else {
        console.log("*****행성생성!*****", planetInfo);
        res.status(201).json({ success: true, planetInfo });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

//~

// 전체 행성조회
router.get("/", function (req, res, next) {
  Planet.find()
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// 행성수정
router.put("/:_id", (req, res) => {
  const _id = req.params._id;
  Planet.updateOne({ _id }, { $set: req.body })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// 행성 삭제
router.delete("/:_id", (req, res) => {
  const _id = req.params._id;
  Planet.deleteOne({ _id })
    .then((r) => {
      res.status(200).send({ success: true, msg: r });
    })
    .catch((e) => {
      res.status(500).send({ msg: e.message });
    });
});

// error handler
router.all("*", function (req, res, next) {
  next(createError(404, "no API"));
});

module.exports = router;

// const newPlanet = await new Planet({
//     name: 'test',
//     member: user._id,
//     category: {
//         Album: ['album1', 'album2'],
//         Diary: ['추억저장소', '한줄일기']
//     }
// });

// newPlanet.save((err, planetInfo) => {
//     if (err) {
//         console.log("*****Fail to save Planet***** ", err);
//         return res.status(400).json({ errors: "Fail to save Planet", err });
//     } else {
//         console.log('*****행성 생성!*****', planetInfo);
//         res.status(200).json({ success: true, planetInfo });
//     }
// })
