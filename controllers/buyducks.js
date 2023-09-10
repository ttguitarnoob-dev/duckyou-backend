const express = require('express')
const router = express.Router()
const BuyDucks = require('../models/store')



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
        const oneItem = await Store.findById(req.params.id)
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

        const newItem = await Store.create(req.body)
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
        const oneItem = await Store.findByIdAndDelete(req.params.id)
        console.log('Goodbye, ducking store item', oneItem)
        res.status(200).json({
            message: "Item deleted"
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
        const updatedItem = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true})
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