const express = require('express')
const Duck = require('../models/duck')
const router = express.Router()

//ROUTES

//show
router.get('/:id', async (req, res) => {
    try{
        const oneDuck = await Duck.findById(req.params.id)
        res.json(oneDuck)
    } catch(err){
        res.json('Error on Show Route oh no:', err)
    }
})

//index
router.get('/', async (req, res) => {
    try{
        const allDucks = await Duck.find()
        res.json(allDucks)
    }catch(err){
        res.json(err)
    }
})

//create
router.post('/', async (req, res) => {
    try{
        console.log('New Duck', req.body)
        const newDuck = await Duck.create(req.body)
        res.json(newDuck)
    }catch(err){
        res.json(err)
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try{
        const oneDuck = await Duck.findByIdAndDelete(req.params.id)
        console.log('Goodbye, ducking duck', oneDuck)
        res.json(oneDuck)
    }catch(err){
        res.status(200).json()
    }
})

//update
router.put('/:id', async (req, res) => {
    try{
        res.send("Update Route")
    }catch(err){
        res.json('Error on Update Route, crap', err)
    }
})

module.exports = router