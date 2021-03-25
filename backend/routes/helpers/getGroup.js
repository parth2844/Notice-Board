const express = require('express')
const Group = require('../../models/group')

// Get group by group id 
async function getGroup(req, res, next) {
    let group
    try {
        group = await Group.findById(req.query.groupId)
        if(group == null) {
            return res.status(404).json({ message: 'Cannot find Group'})
        }
    }
    catch (err) {
        return res.status(500).json({ message : err.message })
    }

    res.group = group
    next()
}

module.exports = getGroup