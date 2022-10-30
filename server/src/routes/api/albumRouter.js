const router = require('express').Router();
const { Album } = require("../../models/Album");
// const controller = require('../../controllers/Album');




// 모든 다이어리 조회
router.get('/', (req, res) => {
    Album.find()
        .sort({ createdAt: 1 })
        .exec((err, albums) => {
            if (err) return res.json(err);
            res.json(albums);
        });
});

// 다이어리 검색
router.get('/:_id', (req, res) => {
    Album.findOne({ _id: req.params._id }, (err, album) => {
        if (err) res.json(err);
        res.json(album);
    });
});

// 다이어리 작성
router.post('/', (req, res) => {

})



module.exports = router;