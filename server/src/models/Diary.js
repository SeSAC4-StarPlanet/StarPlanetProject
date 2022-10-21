const mongoose = require('mongoose');
const { Schema } = mongoose;

/* Schema */
const diarySchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now, immutable: true },
}, { versionKey: false });

module.exports = mongoose.model('diary', diarySchema);