const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
    title: String,
    storeUrl: String,
    imageUrl: String,
    price: String,


}, {timestamps: true })

const Store = mongoose.model('store', storeSchema)
module.exports = Store