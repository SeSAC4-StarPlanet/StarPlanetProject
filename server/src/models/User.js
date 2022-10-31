const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const { Album } = require("./Album");
const { Diary, Comment } = require("./Diary");

const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const secret = require('../../config/default').secretOrKey;
const { unstable_createCssVarsProvider } = require("@mui/system");
const saltRounds = 10;


/* Schema */
const UserSchema = new mongoose.Schema({
    userID: { type: String, unique: true, index: true },
    hashedPW: { type: String },
    username: { type: String, index: true },
    email: { type: String, required: true, sparse: true },
    provider: { type: String, required: true, default: 'local' },
    token: { type: String },
    tokenExp: { type: Number },
    meta: {
        userInfo: { type: String },
        userImg: { type: String, default: 'default-profile.jpg' },
        userPlanet: [{ type: ObjectId, ref: 'Planet' }],
    },
    bookmarks: {
        Album: [{ type: ObjectId, ref: 'Album' }],
        Diary: [{ type: ObjectId, ref: 'Diary' }],
    },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });



/* virtual - 객체에 가상필드 생성 */

//TODO - 유저 활동
UserSchema.virtual('albums', {
    ref: 'Album',
    localField: '_id',
    foreignField: 'user',
});
UserSchema.virtual('diarys', {
    ref: 'Diary',
    localField: '_id',
    foreignField: 'user',
});
UserSchema.virtual('comments', {
    ref: 'Diary',
    localField: 'Comments',
    foreignField: 'user',
});



// userSchema
//     .virtual("pwConfirm")
//     .get(function () { return this._pwConfirm; })
//     .set(function (value) { this._pwConfirm = value; });

// userSchema
//     .virtual("originPw")
//     .get(function () { return this._originPw; })
//     .set(function (value) { this._originPw = value; });

// userSchema
//     .virtual("currPw")
//     .get(function () { return this._currPw; })
//     .set(function (value) { this._currPw = value; });

// userSchema
//     .virtual("newPw")
//     .get(function () { return this._newPw; })
//     .set(function (value) { this._newPw = value; });




/* method - 사용자 정의 메소드 */


//! jwt토큰 발급
UserSchema.methods.setUserToken = async (cb) => {
    //jsonwebtoken을 이용해 토큰 생성
    const token = await jwt.sign(this._id.toHexString(), secret, {
        expiresIn: '15m', // 만료시간 15분
        issuer: '토큰발급자',
    });
    this.token = token;
    this.save(function (err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
};


//! 비밀번호 암호화 (bcrypt)
UserSchema.pre('save', async function (next) {

    // password가 변경(새로 생성)될때만 암호화
    if (this.isModified('hashedPW')) {

        // 비밀번호의 Plain Text를 hash로 교체
        console.log('before PW:', this.hashedPW);
        this.hashedPW = await bcrypt.hash(this.hashedPW, saltRounds);
        console.log(' after PW: ', this.hashedPW);
        next(); // Hashing이 끝나면 save로 넘어감

    } else {    // password가 변경되지 않을 때
        next(); // 바로 save로 넘어감
    }
});


UserSchema.pre('remove', async function (next) {
    const user = this;
    try {
        await Album.deleteMany({ user: user._id });
        await Diary.deleteMany({ user: user._id });
        await Comment.deleteMany({ user: user._id });
        next();
    } catch (e) {
        next();
    }
});

// 검색 후 
UserSchema.post('find', function (result) {
    console.log('find, 저장 완료', result);
});



/* static  */

// 아이디로 사용자 검색
UserSchema.static.findById = (userID, callback) => {
    return this.findOne({ userID }, callback);
};

// 이름으로 사용자 검색
UserSchema.static.findByUsername = (username) => {
    return this.findOne({ username });
};

// 사용자 전체 조회
UserSchema.static('findAll', (callback) => {
    return this.find({}, callback);
});



const User = mongoose.model('User', UserSchema, 'User');

module.exports = { User };




