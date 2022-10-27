const mongoose = require('mongoose');
const { Schema } = mongoose;


/* Schema */
const RecommentSchema = new Schema({
    writer: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String
}, { timestamps: true });

const CommentSchema = new Schema({
    writer: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
}, { timestamps: true });

const DiarySchema = new Schema({
    Planet: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
    writer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String },
    image: { type: String },
    tags: { type: Array },
    Bookmark: {
        markedBy: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
        markNum: { type: Number }
    },
    Comments: {
        type: [CommentSchema],
        default: {
            Recomments: {
                type: [RecommentSchema]
            }
        }
    }
}, { timestamps: true });

const Diary = mongoose.model('Diary', DiarySchema);

module.exports = { Diary };