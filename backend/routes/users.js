const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Group = require('../models/group')
const getUser = require('./helpers/getUser')
const verify = require('./helpers/verifyToken')

// All routes start with /users/

// Create new User
router.post('/register', async (req, res) => {
    
    let user = await User.findOne({ email: req.body.email })
    if(user) {
        return res.status(400).json({ message: "Email already exists" })
    }
    else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
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

// Login User
router.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if(!user) {
        return res.status(400).json({ message: "Email not found" })
    }
    
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass) {
        return res.status(400).json({ message: "Incorrect password" })
    }

    const token = jwt.sign({_id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

// Logout user
router.post('/logout', async (req, res) => {
    const token = req.header('auth-token')

    if(!token)
        return res.status(401).send('Cannot logout before login')

    res.removeHeader('auth-token')

    return res.status(200).send('User Logged out')
})


// Get users groups
router.get('/groups', verify, getUser, async(req, res) => {
    
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