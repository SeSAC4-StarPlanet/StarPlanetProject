const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


/* Schema */
const CategorySchema = new Schema({
    title: { type: String, default: '' },
    name: { type: String, default: '', index: true, unique: true },
    info: { type: String, default: '' },
    _planet: { type: ObjectId, ref: 'Planet', index: true },
})

module.exports = mongoose.model('Category', CategorySchema);