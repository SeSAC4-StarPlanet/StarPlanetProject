const userSchema = require('./User');
const diarySchema = require('./Diary');



exports.createUser = async (user) => {
    const ret = await userSchema.create({ ...user });
    return ret || {};
}

exports.createDiary = async (diary) => {
    const ret = await diarySchema.create({ ...diary });
    return ret || {};
}