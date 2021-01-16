const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/coffee', (req,res) => {
    res.render('coffee')
})

router.get('/coffee-detail', (req,res) => {
    res.render('coffee-detail')
})


module.exports = router