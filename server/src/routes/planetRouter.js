const express = require('express');
const router = express.Router();
const { Planet } = require("../models/Planet");
const { User } = require('../models/User');

// const controller = require('../controllers/planet');

// 테스트용 행성 생성
router.get("/", async (req, res) => {
    try {
        const user = await User.findOne({ userID: 'test' });
        const newPlanet = await new Planet({
            name: 'test',
            member: user._id,
            category: {
                Album: ['album1', 'album2'],
                Diary: ['추억저장소', '한줄일기']
            }
        });

        newPlanet.save((err, planetInfo) => {
            if (err) {
                console.log("*****Fail to save Planet***** ", err);
                return res.status(400).json({ errors: "Fail to save Planet", err });
            } else {
                console.log('*****행성 생성!*****', planetInfo);
                res.status(200).json({ success: true, planetInfo });
            }
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("server Error");
    }
});

module.exports = router;
