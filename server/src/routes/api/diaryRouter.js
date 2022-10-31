const router = require('express').Router();
var createError = require('http-errors');
// const { User } = require("../../models/User");
// const { Planet } = require("../../models/Planet");
const { Category } = require("../../models/Category");
const { Diary, Comment } = require("../../models/Diary");

// User.findOne()
//     .then(r => console.log(r.id, r._id))
// Planet.findOne()
//     .then(r => console.log(r.name, r._id))
// Category.findOne()
//     .then(r => console.log(r.name, r._id))


router.get('/list/:_category', (req, res, next) => {
    const _category = req.params._category
    let { search, sort, order, skip, limit } = req.query
    if (!(sort && order && skip && limit)) throw createError(400, '잘못된 요청입니다')
    if (!search) search = ''
    order = parseInt(order)
    limit = parseInt(limit)
    skip = parseInt(skip)
    const s = {}
    s[sort] = order

    const f = {}
    if (_category) f._category = _category
    let total = 0

    Diary.countDocuments(f)
        .where('title').regex(search)
        .then(r => {
            total = r
            return Diary.find(f)
                .where('title').regex(search)
                .sort(s)
                .skip(skip)
                .limit(limit)
                .select('-content')
                .populate('_user', '-pwd')
        })
        .then(rs => {
            res.send({ success: true, t: total, ds: rs, token: req.token })
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
})

router.get('/read/:_id', (req, res, next) => {
    const _id = req.params._id

    let dry = {}

    Diary.findByIdAndUpdate(_id, { $inc: { 'cnt.view': 1 } }, { new: true }).lean()
        .select('content cnt')
        .then(r => {
            if (!r) throw new Error('잘못된 게시판입니다')
            dry = r
            dry._comments = []
            return Comment.find({ _diary: dry._id }).populate({ path: '_user', select: 'id name' }).sort({ _id: 1 }).limit(5)
        })
        .then(rs => {
            if (rs) dry._comments = rs
            res.send({ success: true, d: dry, token: req.token })
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
})


router.post('/:_category', (req, res, next) => {
    const _category = req.params._category
    if (!_category) throw createError(400, '게시판이 선택되지 않았습니다')
    const { title, content } = req.body
    console.log(req.body)

    if (!title) throw createError(400, '제목이 없습니다')
    if (!content) throw createError(400, '내용이 없습니다')

    Category.findById(_category)
        .then(r => {
            if (!r) throw createError(400, '잘못된 게시판입니다')
            // if (r.lv < req.user.lv) throw createError(403, '권한이 없습니다')
            const dry = {
                title,
                content,
                _category,
                _user: null
            }
            if (req.user._id) dry._user = req.user._id
            return Diary.create(dry)
        })
        .then(r => {
            if (!r) throw new Error('게시물이 생성되지 않았습니다')
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
})

router.put('/:_id', (req, res, next) => {
    // if (!req.user._id) throw createError(403, '게시물 수정 권한이 없습니다')
    const _id = req.params._id

    const { title, content } = req.body

    if (!title) throw createError(400, '제목이 없습니다')
    if (!content) throw createError(400, '내용이 없습니다')

    Diary.findById(_id)
        .then(r => {
            if (!r) throw new Error('게시물이 존재하지 않습니다')
            if (!r._user) throw new Error('게시물은 수정이 안됩니다')
            if (r._user.toString() !== req.user._id) throw new Error('본인이 작성한 게시물이 아닙니다')
            return Diary.findByIdAndUpdate(_id, { $set: { title, content } }, { new: true })
        })
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
})

router.delete('/:_id', (req, res, next) => {
    // if (!req.user._id) throw createError(403, '게시물 삭제 권한이 없습니다')
    const _id = req.params._id

    Diary.findById(_id).populate('_user')
        .then(r => {
            if (!r) throw new Error('게시물이 존재하지 않습니다')
            else {
                if (r._user._id.toString() !== req.user._id) throw new Error('본인이 작성한 게시물이 아닙니다')
            }

            return Diary.deleteOne({ _id })
        })
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
})



//~
// 전체 다이어리 조회
router.get('/', function (req, res, next) {
    Diary.find()
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
});


// 다이어리 수정
router.put("/:_id", (req, res) => {
    const _id = req.params._id
    Diary.updateOne({ _id }, { $set: req.body })
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
});

// 다이어리  삭제
router.delete("/:_id", (req, res) => {
    const _id = req.params._id;
    Diary.deleteOne({ _id })
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