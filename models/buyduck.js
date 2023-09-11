const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
    title: String,
    storeUrl: String,
    imageUrl: String,
    price: String,


}, {timestamps: true })

const BuyDucks = mongoose.model('buyDucks', storeSchema)
module.exports = BuyDucks