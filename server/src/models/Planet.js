import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PlanetSchema = mongoose.Schema({
    name: { type: String },
    meta: {
        planetInfo: { type: String },
        planetImg: { type: String, default: 'default-profile.jpg' },
    },
    payment: { status: { type: Boolean }, maxNum: { Number } },
    member: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
    category: {
        Album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
        Bookmark: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        Diary: { type: [mongoose.Schema.Types.ObjectId], ref: 'Diary' },
    },
}, { timestamps: true })

const Planet = mongoose.model('Planet', PlanetSchema)

module.exports = { Planet }