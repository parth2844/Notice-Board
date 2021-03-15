const express = require('express')
const User = require('../../models/user')

// Get user by user id
async function getUser(req, res, next) {
    console.log(req)
    let user
    try {
        user = await User.findById(req.user._id)
        if(user == null) {
            return res.status(404).json({ message: 'Cannot find User'})
        }
    }
    catch (err) {
        return res.status(500).json({ message : err.message })
    }

    res.user = user
    next()
}

module.exports = getUser