const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Group = require('../models/group')
const getUser = require('./helpers/getUser')

// All routes start with /users/

// Create new User
router.post('/register', async (req, res) => {
    
    let user = await User.findOne({ email: req.body.email })
    if(user) {
        return res.status(400).json({ email: "Email already exists" })
    }
    else {
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
    
        try {
            const newUser = await user.save()
            res.status(201).json(newUser)
        }
        catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
    
})

// Get users groups
router.get('/groups', getUser, async(req, res) => {
    
    try {
        const groups = await Group.find({ _id: {$in : res.user.groups }}, 'name users')
        res.json(groups)
    }
    catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
    
})

module.exports = router