const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc   Login / Landing page
// @route  GET /

router.get('/', ensureGuest, (req, res) => {
    res.render('index.ejs')
})

// @desc   Profile page
// @route  GET /profile

router.get('/profile', ensureAuth, (req, res) => {
    res.render('profile.ejs')
})

module.exports = router