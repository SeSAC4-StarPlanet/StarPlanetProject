import mongoose from 'mongoose'
const { Schema } = mongoose.Schema
const { Types: ObjectId } = Schema;
const { Album } = require("./Album");
const { Diary } = require("./Diary");


/* Schema */
const PlanetSchema = mongoose.Schema({
    name: { type: String },
    meta: {
        planetInfo: { type: String },
        planetImg: { type: String, default: 'default-profile.jpg' },
    },
    members: [{ type: ObjectId, ref: 'User' }],
    payment: {
        status: { type: Boolean },
        maxNum: { Number }
    },
    category: {
        Album: { type: Object },
        Diary: { type: Object }
    },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });


/* virtual */


/* method */
PlanetSchema.pre('remove', async function (next) {
    const planet = this;
    try {
        await Album.deleteMany({ planet: planet._id });
        await Diary.deleteMany({ planet: planet._id });
        next();
    } catch (e) {
        next();
    }
});


/* static */

const Planet = mongoose.model('Planet', PlanetSchema, 'Planet')

module.exports = { Planet }