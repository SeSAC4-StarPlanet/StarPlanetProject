import mongoose from 'mongoose'

const Schema = mongoose.Schema

const planetSchema = mongoose.Schema({
    //writer 필드로 해당 User 모델의 다큐먼트를 참조할 수 있게 relation을 걸어준다.
    member: {
        type: Array,
        ref: 'User'
    },
    title: String,
    description: String,
    category: String,
    views: {
        type: String,
        default: 0,
    }
}, { timestamps: true })

const Planet = mongose.model('Planet', planetSchema)

module.exports = { Planet }