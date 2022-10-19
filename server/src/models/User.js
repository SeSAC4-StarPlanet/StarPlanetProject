const mongoose = require("mongoose");

// schema 
userSchema = mongoose.Schema(
    {
        userid: { type: String, required: true, unique: true },
        // select : false -> DB에서 데이터 읽어올 떄 password는 읽어오지 않는다. 
        password: { type: String, required: true, select: false },
        name: { type: String, required: true },
        email: { type: String },
    },
    {
        toObject: { virtuals: true },
    }
);

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


// password validation 
userSchema
    .path("password")
    .validate(function (value) {

        // this 는 유저 모델 
        const user = this;

        // 유저 생성 
        if (user.isNew) {
            // user가 새로운 document인 경우 -> 생성 
            if (!user.pwConfirm) {
                // 모델.invalidate : 첫번쨰로 인자 항목이름, 두번쨰로 인자 에러메세지 
                user.invalidate("pwConfirm", "비밀번호 확인 칸을 입력하세요!");
            }

            if (user.password !== user.pwConfirm) {
                user.invalidate("pwConfirm", "비밀번호와 비밀번호 확인이 일치하지 않습니다!");
            }


            // 기존 유저 정보 수정 
        } else {
            if (!user.currPw) {
                user.invalidate("currPw", "현재 패스워드를 입력하세요");
            }
            else if (user.currPw != user.originPw) {
                user.invalidate("currPw", "현재 패스워드가 틀렸습니다");
            }

            if (user.newPw !== user.pwConfirm) {
                user.invalidate("pwConfirm", "비밀번호 확인이 일치하지 않습니다!");
            }
        }
    });


const User = mongoose.model("user", userSchema);
module.exports = User;