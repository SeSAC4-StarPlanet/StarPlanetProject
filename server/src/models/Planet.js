import mongoose from 'mongoose'

const Schema = mongoose.Schema

const planetSchema = mongoose.Schema({
    name: { type: String },
    meta: {
        planetInfo: { type: String },
        planetImg: { type: String, default: 'default-profile.jpg' },
    },
    payment: {
        status: { type: Boolean },
        maxNum: { Number }
    },
    category: {

    },
    member: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
}, { timestamps: true })

const Planet = mongoose.model('Planet', planetSchema)

module.exports = { Planet }