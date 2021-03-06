const express = require('express')
const router = express.Router()
const Group = require('../models/group')
const User = require('../models/user')
const getUser = require('./helpers/getUser')
const getGroup = require('./helpers/getGroup')
const verifyToken = require('./helpers/verifyToken')

// All routes start with /groups/

// Create new Group and set the user creating group as admin
router.post('/newGroup', verifyToken, getUser, async (req, res) => { 

    const group = new Group({
        name: req.body.name,
        users: res.user._id,
        admins:  res.user._id
    })
    
    try {
        const newGroup = await group.save()
        res.user.groups.push(newGroup._id)
        const updatedUser = await res.user.save()

        res.status(201).json({newGroup, updatedUser})
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Add user to a group
router.patch('/addUser', verifyToken, getUser, getGroup, async (req, res) => {
    let user = res.user
    let group = res.group

    if(user.groups.includes(group._id)) {
        res.status(400).json({ message: "User already a member of group" })
    }
    else {
        user.groups.push(group._id)
        group.users.push(user._id)

        try {
            const updatedUser = await user.save()
            const updatedGroup = await group.save()

            res.json({updatedUser, updatedGroup})
        }
        catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    
})

// Get users of a group
router.get('/getUsers', getGroup, async (req, res) => {
    try {
        const users = await User.find({ _id: {$in : res.group.users }}, 'name')
        const totalUsers = users.length
        res.json({totalUsers , users})
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
})


module.exports = router