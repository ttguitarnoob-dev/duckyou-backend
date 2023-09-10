const mongoose = require('mongoose')

const storeSchema = mongoose.Schema({
    title: String,
    storeUrl: String,
    imageUrl: String,
    price: String,


}, {timestamps: true })

const Store = mongoose.model('store', storeSchema)
const BuyDucks = mongoose.model('buyDucks', storeSchema)
module.exports = Store
module.exports = BuyDucks