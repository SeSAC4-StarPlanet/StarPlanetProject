const express = require("express");
const router = express.Router();
const { Planet } = require("../models/Planet");
const { User } = require("../models/User");

// const controller = require('../controllers/planet');

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
  } catch (error) {
    console.error(error);
    res.status(500).send("server Error");
  }
});

module.exports = router;
