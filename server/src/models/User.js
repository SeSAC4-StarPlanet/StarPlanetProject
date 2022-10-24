const mongoose = require("mongoose");
const { Schema } = mongoose;


/* Schema */
const userSchema = new Schema({
    user_id: { type: String, required: true, unique: true },
    username: { type: String, required: true, index: 'hashed', default: 'name' },
    email: { type: String, trim: true },
    hashedPassword: { type: String, required: true },
    meta: {
        image: { type: String },
        planet: { type: Array },
        role: { type: Number, default: 0 }
    },
    token: { type: String },
    tokenExp: { type: Number },
}, {
    timestamps: true,
    toObject: { virtuals: true },
}
);



/* virtual */
userSchema
    .virtual('password')
    .set(function (password) {// password를 DB에 저장되지 않는 virtual 속성으로 정의
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password, this.salt);
        console.log('hashedPassword 저장 : ' + this.hashedPassword);
    })

// virtuals
userSchema
    .virtual("pwConfirm")
    .get(function () { return this._pwConfirm; })
    .set(function (value) { this._pwConfirm = value; });

userSchema
    .virtual("originPw")
    .get(function () { return this._originPw; })
    .set(function (value) { this._originPw = value; });

userSchema
    .virtual("currPw")
    .get(function () { return this._currPw; })
    .set(function (value) { this._currPw = value; });

userSchema
    .virtual("newPw")
    .get(function () { return this._newPw; })
    .set(function (value) { this._newPw = value; });




/* static */
userSchema.static('findById', (user_id, callback) => {
    return this.find({ user_id: user_id }, callback);
});
userSchema.static('findAll', (callback) => {
    return this.find({}, callback);
});



/* Method */
userSchema.method('encryptPassword', function (plainText, salt) {
    if (salt) { return crypto.createHmac('sha1', salt).update(plainText).digest('hex'); }
    else { return crypto.createHmac('sha1', this.salt), update(plainText).digest('hex'); }
});
userSchema.method('makeSalt', function () { return Math.round(Date.now().valueOf() * Math.random) + ''; });
userSchema.method('authenticate', function (password, salt, hashedPassword) {
    if (salt) { return this.encryptPassword(password, salt) === hashedPassword; }
    else { return this.encryptPassword(password, this.salt) === hashedPassword; }
});

userSchema.methods.generateJWT = function () {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};





const User = mongoose.model('User', userSchema);

module.exports = { User };



// // password validation 1
// userSchema.methods.checkPassword = async function (salt, inputPW, callback) {
//     if ((await decrypt(salt, inputPW)) == this.key) {
//         callback(null, true);
//     } else {
//         callback("비밀번호가 일치하지 않습니다.", false);
//     }
// };

// // password validation 2
// userSchema
//     .path("password")
//     .validate(function (value) {

//         // this 는 유저 모델 
//         const user = this;

//         // 유저 생성 
//         if (user.isNew) {
//             // user가 새로운 document인 경우 -> 생성 
//             if (!user.pwConfirm) {
//                 // 모델.invalidate : 첫번쨰로 인자 항목이름, 두번쨰로 인자 에러메세지 
//                 user.invalidate("pwConfirm", "비밀번호 확인 칸을 입력하세요!");
//             }

//             if (user.password !== user.pwConfirm) {
//                 user.invalidate("pwConfirm", "비밀번호와 비밀번호 확인이 일치하지 않습니다!");
//             }


//             // 기존 유저 정보 수정 
//         } else {
//             if (!user.currPw) {
//                 user.invalidate("currPw", "현재 패스워드를 입력하세요");
//             }
//             else if (user.currPw != user.originPw) {
//                 user.invalidate("currPw", "현재 패스워드가 틀렸습니다");
//             }
//             if (user.newPw !== user.pwConfirm) {
//                 user.invalidate("pwConfirm", "비밀번호 확인이 일치하지 않습니다!");
//             }
//         }
//     });

