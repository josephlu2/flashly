const mongoose = require('mongoose')

const Schema = mongoose.Schema

const setSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    cards: {
        type: Object,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    visibility: {
        type: Boolean, // true = public, false = private
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Set', setSchema)

