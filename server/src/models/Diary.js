const mongoose = require('mongoose');
const { Schema } = mongoose;


/* Schema */
const RecommentSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const CommentSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const DiarySchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: { type: String },
    content: { type: String },
    image: { type: String },
    tags: { type: Array },
    bookmark: { type: Number },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    comments: {
        type: [CommentSchema],
        default: {
            recomments: {
                type: [RecommentSchema]
            }
        }
    }
});

const Diary = mongoose.model('Diary', DiarySchema);

module.exports = { Diary };