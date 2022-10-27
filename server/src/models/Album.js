const mongoose = require('mongoose');
const { Schema } = mongoose;


/* Schema */
const AlbumSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
    writer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String },
    image: { type: String },
    tags: { type: Array },
    Bookmark: {
        markBy: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
        markNum: { type: Number }
    }
}, { timestamps: true });

const Album = mongoose.model('Album', AlbumSchema);

module.exports = { Album };