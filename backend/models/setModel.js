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
    }
}, { timestamps: true})

module.exports = mongoose.model('Set', setSchema)

