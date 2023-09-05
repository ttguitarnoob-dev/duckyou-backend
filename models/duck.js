const mongoose = require('mongoose')


const duckSchema = mongoose.Schema({
    duckName: String,
    serial: {
        type: String,
        required: true
    },
    locations: [
        {
            destination: String,
            dateFound: String,
            coords: Object,
            image: {
                url: String,
                caption: String
            }
        }
    ],

}, { timestamps: true })

const Duck = mongoose.model('duck', duckSchema)
module.exports = Duck