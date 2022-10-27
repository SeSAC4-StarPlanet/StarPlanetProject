const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Schema */
const UserSchema = new mongoose.Schema({
    userID: { type: String, required: true, unique: true, default: 'socialUser' },
    hashedPW: { type: String, required: true, default: 'socialUser' },
    username: { type: String, required: true },
    email: { type: String, trim: true },
    snsID: { type: String },
    provider: { type: String, required: true, default: 'local' },
    meta: {
        userInfo: { type: String },
        userImg: { type: String, default: 'default-profile.jpg' },
    },
    Planet: { type: [mongoose.Schema.Types.ObjectId], ref: 'Planet' },
    Bookmark: {
        Diary: { type: [mongoose.Schema.Types.ObjectId], ref: 'Diary' },
        Album: { type: [mongoose.Schema.Types.ObjectId], ref: 'Album' }
    }
},
    {
        timestamps: true,
        toObject: { virtuals: true },
    }
);


/* virtual */
// userSchema
//     .virtual('password')
//     .set(function (password) {// password를 DB에 저장되지 않는 virtual 속성으로 정의
//         this.salt = this.makeSalt();
//         this.hashedPW = this.encryptPassword(password, this.salt);
//         console.log('hashedPW 저장 : ' + this.hashedPW);
//     })

// // virtuals
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



// /* static */
// userSchema.static('findById', (user_id, callback) => {
//     return this.find({ user_id: user_id }, callback);
// });
// userSchema.static('findAll', (callback) => {
//     return this.find({}, callback);
// });


/* Method */
//! 비밀번호 암호화 (bcrypt)
userSchema.pre('save', async function (next) {
    const user = this;
    // 비밀번호를 변경(새로 입력 포함)하는 경우
    if (user.isModified('hashedPW')) {
        const salt = await bcrypt.genSalt(saltRounds);
        // 해쉬화된 비밀번호로 변경
        user.hashedPW = await bcrypt.hash(user.hashedPW, salt, function (err) {
            if (err) return next(err);
            next();
        });
    }
});

//! 비밀번호 비교 (bcrypt)

// // password validation
// userSchema.methods.checkPassword = async function (salt, inputPW, callback) {
//     if ((await decrypt(salt, inputPW)) == this.key) {
//         callback(null, true);
//     } else {
//         callback("비밀번호가 일치하지 않습니다.", false);
//     }
// };



const User = mongoose.model('User', UserSchema);

module.exports = { User };




