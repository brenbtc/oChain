const express = require('express');
const router = express.Router()
const db = require('../models');
const jwt = require('jwt-simple');
const config = require('../config/config')


// Signup Route \\
router.post('/signup', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username })
    if(!foundUser){
        const createdUser =await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }
})

// Login Route \\
router.post('login', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username })
    if(req.body.password === foundUser.password){
        const payload = {id: foundUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        const userNotes = await db.Note.find({ user: foundUser._id })
        res.json({
            user: foundUser,
            token: token,
            notes: userNotes
        })
    } else {
        sendStatus(401)
    }

})

// Token Show \\
router.get('/token', async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decoded._id)
    const userNotes = await db.Note.find({ user:foundUser._id })
    res.json({
        user: foundUser,
        notes: userNotes
    })
})

module.exports = router