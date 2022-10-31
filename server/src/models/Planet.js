const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const User = require('./User');
const Album = require("./Album");
const Diary = require("./Diary");


/* Schema */
const PlanetSchema = mongoose.Schema({
    name: { type: String },
    select: { type: Number, default: 0 },
    member: [{ type: ObjectId, ref: 'User' }],
    payment: { type: Boolean },
    category: {
        Album: [{ type: ObjectId, ref: 'Album' }],
        Diary: [{ type: ObjectId, ref: 'Diary' }]
    }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });



/* static : Collection 단위*/
//TODO
// // 아이디로 사용자 검색
// UserSchema.statics.findByUserID = function (userID) {
//     return this.findOne({ userID });
// };
// // 이름으로 사용자 검색
// UserSchema.statics.findByName = function (username) {
//     return this.findOne({ username });
// };
// // 이메일로 사용자 검색
// UserSchema.statics.findByEmail = function (email) {
//     return this.findOne({ email });
// };
// // 사용자 전체 조회
// UserSchema.static('findAll', (callback) => {
//     return this.find({}, callback);
// });




/* method : Document 단위*/
PlanetSchema.pre('remove', async function (next) {
    const planet = this;
    try {
        await Album.deleteMany({ _planet: planet._id });
        await Diary.deleteMany({ _planet: planet._id });
        next();
    } catch (e) {
        next();
    }
});


/* static */




module.exports = mongoose.model('Planet', PlanetSchema, 'Planet')
