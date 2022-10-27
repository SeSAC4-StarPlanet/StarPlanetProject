const mongoose = require('mongoose');
const { Schema } = mongoose;


/* Schema */
const RecommentSchema = new Schema({
    writer: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const CommentSchema = new Schema({
    writer: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now, },
});

const DiarySchema = new Schema({
    writer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String },
    image: { type: String },
    tags: { type: Array },
    Bookmark: {
        markedBy: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
        markNum: { type: Number }
    },
    createdAt: { type: Date, default: Date.now },
    Comments: {
        type: [CommentSchema],
        default: {
            Recomments: {
                type: [RecommentSchema]
            }
        }
    }
});

const Diary = mongoose.model('Diary', DiarySchema);

module.exports = { Diary };