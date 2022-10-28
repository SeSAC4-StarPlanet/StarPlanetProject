const express = require('express');
const router = express.Router();

const Diary = require("../models/Diary");
const controller = require('../controllers/diary')




// 모든 다이어리 조회
router.get('/', (req, res) => {
    Diary.find({})
        .sort({ createdAt: 1 })
        .exec((err, diarys) => {
            if (err) return res.json(err);
            res.json(diarys);
        });
});

// 다이어리 검색
router.get('/:_id', (req, res) => {
    Diary.findOne({ _id: req.params._id }, (err, diary) => {
        if (err) res.json(err);
        res.json(diary);
    });
});

// 다이어리 작성
router.post('/', controller.createDiary);



module.exports = router;