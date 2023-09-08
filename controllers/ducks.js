const express = require('express')
const Duck = require('../models/duck')
const router = express.Router()

//ROUTES

//show
router.get('/:id', async (req, res) => {
    try {
        const oneDuck = await Duck.findById(req.params.id)
        res.json(oneDuck)
    } catch (err) {
        res.status(400).json({
            body: err
        })
    }
})

//index
router.get('/', async (req, res) => {
    try {
        const allDucks = await Duck.find()
        res.json(allDucks)
    } catch (err) {
        res.status(400).json({
            body: err
        })
    }
})

//create
router.post('/', async (req, res) => {
    try {
        console.log('About to create a duck', req.body)

        const newDuck = await Duck.create(req.body)
        res.json(newDuck)
    } catch (err) {
        res.status(400).json({
            body: err
        })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const oneDuck = await Duck.findByIdAndDelete(req.params.id)
        console.log('Goodbye, ducking duck', oneDuck)
        res.json(oneDuck)
    } catch (err) {
        res.status(400).json({
            body: err
        })
    }
})

//updated
router.put('/:id', async (req, res) => {
    try {
        const updatedDuck = await Duck.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedDuck)
    } catch (err) {
        res.status(400).json({
            body: err
        })
    }
    

})

module.exports = router