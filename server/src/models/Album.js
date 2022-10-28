const mongoose = require("mongoose");
const { Schema } = mongoose;
const { Types: ObjectId } = Schema;


/* Schema */
const AlbumSchema = new Schema({
    planet: { type: ObjectId, required: true, ref: 'Planet' },
    user: { type: ObjectId, required: true, ref: 'User' },
    title: [String],
    image: [{ type: String, required: true }],
    tags: [String],
    Bookmark: {
        markBy: [{ type: ObjectId, ref: 'User' }],
        markNum: { type: Number, default: 0 }
    }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });


/* virtual */
/* method */
/* static */

const Album = mongoose.model('Album', AlbumSchema, 'Album');

module.exports = { Album };