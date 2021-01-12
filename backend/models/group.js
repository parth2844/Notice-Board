const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        default: undefined,
        required: true,
        ref: 'User'
    },    
    admins: {
        type: [mongoose.Schema.Types.ObjectId],
        default: undefined,
        required: true,
        ref: 'User'
    },
    notices: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Notice'
    },
    archivedNotices: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Notice'
    }
})

const Group = mongoose.model('Group', groupSchema)

module.exports = Group