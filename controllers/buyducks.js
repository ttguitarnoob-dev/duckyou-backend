const express = require('express')
const router = express.Router()
const BuyDucks = require('../models/buyduck')



//ROUTES

//index
router.get('/', async (req, res) => {
    try {
        const allItems = await BuyDucks.find()
        res.json(allItems)
    } catch (err) {
        res.status(400).json({
            message: "big bad problem with fetching store item",
            error: err
        })
    }
})

//show
router.get('/:id', async (req, res) => {
    try {
        const oneItem = await BuyDucks.findById(req.params.id)
        res.json(oneItem)
    } catch (err) {
        res.status(400).json({
            message: "big bad problem with fetching store item",
            error: err
        })
    }
})

//create
router.post('/', async (req, res) => {
    try {
        console.log('About to create a new store item', req.body)

        const newItem = await BuyDucks.create(req.body)
        res.json(newItem)
    } catch (err) {
        res.status(400).json({
            message: "big bad problem with fetching store item",
            error: err
        })
    }
})

//delete
router.delete('/:id', async (req, res) => {
    try {
        const oneItem = await BuyDucks.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Goodbye, ducking buyable duck",
            deletedItem: oneItem
        })
    } catch (err) {
        res.status(400).json({
            message: "Something went horrifically wrong when deleting a store item"
        })
    }
})

//updated
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await BuyDucks.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            message: "Item udated"
        })
    } catch (err) {
        res.status(400).json({
            message: "big bad problem with fetching store item",
            error: err
        })
    }
    

})

module.exports = router