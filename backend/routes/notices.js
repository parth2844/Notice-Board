const express = require('express')
const router = express.Router()
const Group = require('../models/group')
const User = require('../models/user')
const Notice = require('../models/notice')
const getUser = require('./helpers/getUser')
const getGroup = require('./helpers/getGroup')

// All routes start with /notices/

// Add new notice to group
router.post("/addNotice", getGroup, async (req, res) => {
    let group = res.group

    if(!group.admins.includes(req.body.userId)) {
        res.status(400).json({ message: "Only admins can post notices to the group" })
    }
    else {        
        const notice = new Notice({
            title: req.body.notice.title,
            description: req.body.notice.description
        })

        try {
            const newNotice = await notice.save()
            group.notices.push(newNotice._id)
            const updatedGroup = await group.save()
            res.json({updatedGroup, newNotice})
        }
        catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
})

// Send notice to archived notices
router.post('/archiveNotice', getGroup, async (req, res) => {
    let group = res.group

    if(!group.notices.includes(req.body.noticeId)) {
        res.status(400).json({ message: "Notice does not exist in this group" })
    }
    else {
        try {
            var index = group.notices.indexOf(req.body.noticeId);
            if (index > -1) {
                group.notices.splice(index, 1);
            }
            
            group.archivedNotices.push(req.body.noticeId)

            const updatedGroup = await group.save()
            res.json(updatedGroup)

        }
        catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
})

// Get notices of a group
router.get('/getNotices', getGroup, async (req, res) => {
    try {
        const notices = await Notice.find({ _id: {$in : res.group.notices }})
        const totalNotices = notices.length
        res.json({totalNotices , notices})
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

// Get archived notices of a group
router.get('/getArchived', getGroup, async (req, res) => {
    try {
        const archivedNotices = await Notice.find({ _id: {$in : res.group.archivedNotices }})
        const totalNotices = archivedNotices.length
        res.json({totalNotices , archivedNotices})
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router
