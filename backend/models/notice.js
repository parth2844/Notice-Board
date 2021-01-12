const mongoose = require('mongoose')

const noticeSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Notice = mongoose.model('Notice', noticeSchema)

module.exports = Notice