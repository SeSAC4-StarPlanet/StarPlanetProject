import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cupSchema = mongoose.Schema({
    writer: {
        type: Schema.types.ObjectId,
        ref: 'User'
    },
    videoId: {
        type: Schema.types.ObjectId,
        ref: 'User'
    },
    cup: String
})

const cup = mongoose.model('cup', cupSchema)

module.exports = { cup }